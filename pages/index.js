import React, { Component } from 'react';
import {Card , Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';
import web3 from '../ethereum/web3'
import Case from '../ethereum/case'
import fetch from 'isomorphic-unfetch'
 
class donationIndex extends Component{


  
  static async getInitialProps()
  {
    const donation = await factory.methods.getDeployedCampaigns().call();

    var title = [];
    var summary = [];

    for(var  i = 0 ; i <donation.length ; i ++)
     {   
      var currentTitle = await factory.methods.getTitle(donation[i]).call();
      title.push(currentTitle);
      var donationCase = Case(donation[i]);
      var current  = await donationCase.methods.getSummary().call();
      summary.push(current);
     }
     
   const resp  = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=d72fbb2700048423c8118fe1032b901856834ad63205c3d4e5163a40686a8940')
   const to_json = await resp.json();
   console.log(to_json.ETH.USD);
   console.log(summary);

    return{ 
    summary ,
    donation , 
    title ,
    rate : to_json.ETH.USD

     }; 

  }



  renderDonation() {

    
  	const items = this.props.donation.map( (address , index) =>{
     
  return {
  

  	header : this.props.title[index] , 

    meta :  "Amount Collected: " +  Math.ceil(web3.utils.fromWei(this.props.summary[index][0],'ether') * this.props.rate) +" USD"+
    " • Target Amount: " + Math.ceil(web3.utils.fromWei(this.props.summary[index][1],'ether') * this.props.rate) + " USD",

  	description : (
      

      <Link route={`/donations/${address}`}>
      <Button basic color='green' style = {{marginTop:10}}
      >Donate now</Button>
       </Link>

       ),
  	fluid: true
  };


     		}) ; 


  	return < 	Card.Group items = {items} />;

  } 

   changePage(){
    routes="/donations/new";
   }

 render(){

   	return (  
 
     <Layout>
   		<div>
    
    <h3> Avilable Cases </h3>

   
   <Link routes ="/donations/new">

     <a>
     <Button 
      onClick = {this.changePage}
      floated="right"
      content = "Create a new case"
      icon="add circle"
      primary={true}

     />
</a>
 </Link>
     	{this.renderDonation()} 


   	</div>

</Layout>

   	);

   }


 }
  	

export default donationIndex ;