
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
    // mumbai: {
    //   url: process.env.QUICKNODE_API_KEY_URL,
    //   accounts: [process.env.GOERLI_PRIVATE_KEY],
    // },
  },
  etherscan: {
    apiKey: {
    goerli: process.env.ETHERSCAN_KEY,
    }
  }
};