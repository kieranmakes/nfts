const networkConfig = {
  default: {
    name: "hardhat",
    subscriptionId: "294",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
  },
  31377: {
    name: "localhost",
    subscriptionId: "294",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
  },
  4: {
    name: "rinkeby",
    subscriptionId: "294",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
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
