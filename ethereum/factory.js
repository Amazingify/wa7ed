import web3 from './web3';
import CampaignFactory from './build/donationFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x58E6cC268025f83D30A748884874EC9750819B97'
);

export default instance;  //0xF83Fb6c3782daaCD47c983A0E2087d24EDB1fFE9