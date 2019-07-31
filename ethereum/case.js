import web3 from './web3';
import donation from './build/Donation.json'



export default (address) =>{


  return new web3.eth.Contract(
    
    JSON.parse(donation.interface),
    address
  
  	);


};