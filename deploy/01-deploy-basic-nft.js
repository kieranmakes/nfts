const { network } = require("hardhat");
const { developmentChains } = require("../hardhat-helper-config");
const { verify } = require("../utils/verify");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("-----------------------------------------------------");
  const args = [];
  const BasicNft = await deploy("BasicNFT", {
    from: deployer,
    args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(BasicNft.address, arguments);
  }
};

module.exports.tags = ["BasicNFT", "all"];
