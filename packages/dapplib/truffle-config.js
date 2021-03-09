require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth right puppy gesture credit equal gauge'; 
let testAccounts = [
"0xf795b2e59344255fd6e4e7d0616905fcbe76f9cfbbfa680e01d70657a632223e",
"0x19ba420326b2566a289e2f442ee268cffa1e677d7d9c801d993d1ebe00f28638",
"0x5d3030f436ed936bf78b3859c167d16ad4544c9a8ffbd98e32c561eecbc5ef40",
"0x9e465818fd9a8edea926b5c54f13c3e99ab26da027070436561d06e4e75763ba",
"0xed61dc09110ab6697bdf18ede209c10c6c1312b83948ffa02a967c40555a009d",
"0xe26adf9930866cd395d23604e5013f830e886e1a0c7d91dd9c33c0c783ec6ec0",
"0x1570251ed78ae2af482ec25aee79af7478b2b9fa227fe53adc459f7c16a3bdfd",
"0xc2ee110dae97977dfc3af942653b568b737831f0233316d0b05f351f66b33111",
"0x99e003064caed0e3e4177e67e8266e651f5d696ee33fae2fa6373789f669f880",
"0x2e2cb1d82caa2eb9768d14f927787420edebfed08794d7928c38621feb9dd0fc"
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
