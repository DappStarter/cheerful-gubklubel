require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain upgrade give fork bubble series'; 
let testAccounts = [
"0x9327df5e99de2381f416403847d55ff740ec28a9bfd3b8a741e0e0fcb692a307",
"0xb8a7616d70cb663ec21c307740068b99be56c2964ebb84dd395033c5170cedc6",
"0x9883b6fa42c5f571b76ea33f40f6488a379b5cb376ab741ec1fd08ce6e2b361f",
"0xd427e1d9eb2b9a788b63e430f91e39e650d6761ea3d949a6cabe3873e4f7afd6",
"0xfa24cea8fe30467fd0ac6eeef619e7f452f74b2b7b42a2c94ddd99fb804e810b",
"0x49c211c4eaafba192a6d70abbaa622862b6bcbef7336f2fda94aa1e551243b70",
"0x722c97409dbd1bfcace3ec6f223d5ff1e8c4c0a4128c6ef62a2f21e4d9720b39",
"0xa0bf40bf46fa53b67399b215164123243f6027f94a7dfb299e87f5e14bc6943c",
"0x450169b171c0b21f64647a863a80897e175670da5eaea0caf0efb6705e6ce9b1",
"0xd01d96403d3877bf8d2ddbd17eea077c6b663e20ded85d00e9a79447a3173e6d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
