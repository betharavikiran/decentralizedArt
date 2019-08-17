/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const HDWalletProvider = require('truffle-hdwallet-provider');
const DEFAULT_MNEMONIC = 'cushion sign raise elbow salmon embody life trophy scrap guitar vacuum dilemma';


// Infura key
const projectID = '11a88887ed9546e6ad57b2374e6ef349';
const secretKey ='a82a2a09279e4eb3978670a50f3c6e2e';

const defaultRPC = (network) =>
    `https://${network}.infura.io/v3/${projectID}`


const mnemonic = () => {
    return DEFAULT_MNEMONIC;
}

const providerForNetwork = (network) => (
    () => {
        return new HDWalletProvider(mnemonic(), defaultRPC(network))
    }
);


const mochaGasSettings = {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
        currency: 'USD',
        gasPrice: 3
    }
}

const mocha = process.env.GAS_REPORTER ? mochaGasSettings : {}

module.exports = {
    migrations_directory: "./migrations",
    networks: {
        kovan: {
            network_id: 42,
            provider: providerForNetwork('kovan'),
            gas: 4600000, // 6.9e6,
            gasPrice: 3,
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            skipDryRun: true
        },
        ropsten: {
            network_id: 3,
            provider: providerForNetwork('ropsten'),
            gas: 4600000, // 6.9e6,
            gasPrice: 10,
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            skipDryRun: true
        },
        goerli: {
            network_id: 5,
            provider: providerForNetwork('goerli'),
            gas: 4465030, // 6.9e6,
            gasPrice: 10000000000,
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            skipDryRun: true
        },
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        }
    },
    compilers: {
        solc: {
            version: '0.4.25',
            optimizer: {
                enabled: true,
            },
        }
    },
    build: {},
    mocha,
};
