const HDWalletProvider = require("truffle-hdwallet-provider");

// 1. Initialize LoomTruffleProvider

// Set your own mnemonic here
const mnemonic = "xxx";

module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/ad7b95f89eed4852a9710c23a9b5cf72");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};

