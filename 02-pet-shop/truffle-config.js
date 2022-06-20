// For configuration options see https://trufflesuite.com/docs/truffle/reference/configuration/
module.exports = {
  contracts_build_directory: "../client/src/contracts",

  networks: {
    development: {
      host: "ganache-cli",
      port: 8545,
      network_id: "*"
    },
  },

  compilers: {
    solc: {
      optimizer: {
        enabled: false,
        runs: 0
      },
      version: "0.8.15"
    }
  }
}
