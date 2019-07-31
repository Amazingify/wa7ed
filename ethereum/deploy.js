const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/donationFactory.json');

const provider = new HDWalletProvider(
  'shell lottery wolf column trouble practice disagree head dentist rival obtain wonder',
  'https://rinkeby.infura.io/v3/1145a07508e246f28cc6b337f042e881'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0] });


  console.log('Contract deployed to', result.options.address);
};
deploy();  //0x38846cA79981d82807203D01F9bE5abCd28262aD