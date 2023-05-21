// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.18',
  defaultNetwork: 'hardhat',
  allowUnlimitedContractSize: true,
  networks: {
    goerli: {
      url: process.env.APIURL,
      accounts: [process.env.YOUR_PRIVATE_ACCOUNT_KEY],
    },
    mumbai: {
      url: process.env.MUMBAIAPI,
      accounts: [process.env.YOUR_PRIVATE_ACCOUNT_KEY],
    },
  },
  etherscan: {
    apiKey: {
    goerli: process.env.ETHERSCAN_KEY,
    }
  }
};