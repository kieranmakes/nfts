const { assert } = require("chai");
const { network, getNamedAccounts, deployments } = require("hardhat");
const { developmentChains } = require("../hardhat-helper-config");

const { deploy, log } = deployments;

describe("BasicNFT", () => {
  let deployer;
  let user;
  let BasicNft;
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    // deploy contract
    await deployments.fixture(["all"]);
    BasicNft = await ethers.getContract("BasicNFT");
  });
  describe("Mint NFT", () => {
    beforeEach(async () => {
      // mint nft
      const tx_mintNFT = await BasicNft.mintNFT();
      tx_mintNFT.wait(1);
    });

    it("deploy nft and check tokenCounter increments", async () => {
      let tokenCounter = await BasicNft.getTokenCounter();
      assert.equal(tokenCounter.toString(), "1");
    });
    it("tokenURI returns the token URI", async () => {
      let expectedTokenURI =
        "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";

      let tokenURI = await BasicNft.tokenURI(1);
      assert.equal(tokenURI, expectedTokenURI);
    });
  });
});
