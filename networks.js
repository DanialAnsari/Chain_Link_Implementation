const mnemonic = "absent heavy face crawl mask blue because river bike lemon toy ability"
const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config();
module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        mnemonic, "https://rinkeby.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7"
      ),
      networkId: 4,
      gasPrice: 10e9
    },

    kovan: {
      provider: () => new HDWalletProvider(
        mnemonic, "https://kovan.infura.io/v3/c89f216154d84b83bb9344a7d0a91108"
      ),
      networkId: 42,
      gasPrice: 10e9
    },

    mainnet: {
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY, 'https://mainnet.infura.io/v3/98ae0677533f424ca639d5abb8ead4e7'
      ),
      networkId: 1,
      gas: 2000000,
      gasPrice: 150e9
    },


  },
};