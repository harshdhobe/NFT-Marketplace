require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const fs = require("fs");
const PRIVATE_KEY = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/uvGqARSAE--hzL3xybFT3KMnUq21EVBt",
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/uvGqARSAE--hzL3xybFT3KMnUq21EVBt",
      accounts: [PRIVATE_KEY]
    },

  },
  solidity: "0.8.28",
};
