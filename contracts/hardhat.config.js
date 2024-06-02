require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    sepolia: {
      // url: process.env.ALCHEMY_PROVIDER_URL,
      chainId: 11155111.,
      // accounts: [process.env.METAMASK_PRIVATE_KEY],
      
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};


// const tokenAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
// const vestingAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';


