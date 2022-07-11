const networkConfig = {
  default: {
    name: "hardhat",
  },
  31377: {
    name: "localhost",
  },
  4: {
    name: "rinkeby",
  },
  1: {
    name: "mainnet",
  },
};

const developmentChains = ["hardhat", "localhost"];

const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
};
