/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
 mumbai: {
   url: "https://rpc-mumbai.maticvigil.com",
   accounts: ["3d6686006cb1682ced3494f863ed7fc341d1ff2c37c211f5c401f2b935bdbaf3"]
 }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}