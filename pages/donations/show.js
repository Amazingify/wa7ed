import React , {Component} from 'react';
import Layout from '../../components/Layout'
import Case from '../../ethereum/case'
import {Card , Grid,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3'
import ContributeForm from '../../components/contributionForm'
import fetch from 'isomorphic-unfetch'
import factory from '../../ethereum/factory';
import {Link} from '../../routes';


class DonationShow extends Component{
    
    
      

    static async getInitialProps(props){
       
       const dons = await factory.methods.getDeployedCampaigns().call();
       console.log(dons);
        

       var other_donations = [];

       const accounts = await web3.eth.getAccounts();
       const userAccount = accounts[0];
       console.log(userAccount);
       
       for(var i = 0 ; i <dons.length; i ++)
       {
         var temp = Case(dons[i]);
         var contribution_test = await temp.methods.getDonatedAmount(userAccount).call();
         
         if(contribution_test>0 && dons[i] != props.query.address)
          {
            var summ = await temp.methods.getSummary().call();
            summ[3] = contribution_test;
            summ[4] = dons[i] ;
            other_donations.push(summ);  
          }
       }

       console.log(other_donations);
       const donationCase = Case(props.query.address);
       const summary = await donationCase.methods.getSummary().call();
       const resp  = await fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=d72fbb2700048423c8118fe1032b901856834ad63205c3d4e5163a40686a8940')
       const to_json = await resp.json();
       const finale = to_json;
       const donatedAmount = await donationCase.methods.getDonatedAmount(userAccount).call()
      
       return{ 
       
       moreDonations : other_donations,
       donated : Math.ceil(web3.utils.fromWei(donatedAmount,'ether')*to_json.ETH.USD),
       rate:to_json.ETH.USD, 
       address: props.query.address,
       Balance: summary[0],
       TargetAmount: summary[1],
       Name : summary[2]

       };

     }   
  
   renderCards(){


    const {
     donated, 
     rate ,
     Balance , 
     TargetAmount,

    } = this.props;

    

   	const items =[

    {

       header : Math.ceil(web3.utils.fromWei(Balance,'ether')*rate)  + " USD",
       meta : 'the current balance for this case' ,
       description : 'the amount of funds gathered for this case'

    } , {

       
       header : Math.ceil(web3.utils.fromWei(TargetAmount,'ether') * rate) + " USD",
       meta : "amount needed to be collected",
       description : " this is the target amount of this case"

    } ,

    {
    	header: Math.ceil((web3.utils.fromWei(TargetAmount,'ether') - web3.utils.fromWei(Balance,'ether'))*rate) + " USD" ,
    	meta: "is still needed",
    	description : "this is how much more funds needed for this case"
    } ,

    {
      header : donated + " USD",
      meta : "is how much you donated",
      description : "the amount of money you donated for this case"
    }
   

   	];
    
    return <Card.Group items ={items}/>;

   }


   renderOtherDonations(){
   
    const items =  this.props.moreDonations.map((elem , index) => {
    
      return {

        header: this.props.moreDonations[index][2],
        meta : "Amount you donated: " + Math.ceil( web3.utils.fromWei(this.props.moreDonations[index][3],'ether') * this.props.rate) + " USD" +
        " • "+"Target Amount: "+ Math.ceil( web3.utils.fromWei(this.props.moreDonations[index][1],'ether')*this.props.rate) + " USD" +
        " • " + " Amount Collected: " + Math.ceil( web3.utils.fromWei(this.props.moreDonations[index][0],'ether')*this.props.rate) +" USD",
        description : (
      

      <Link route={`/donations/${this.props.moreDonations[index][4]}`}>
      <Button basic color='green' style = {{marginTop:10}}
      >Donate again</Button>
       </Link>

       ),
    fluid: true
      
      } ;

       });


       return <Card.Group items ={items}/>;
   }




   render(){
     
     console.log(this.props.donated)
     return (
       <Layout>
        
        
       <h3>{this.props.Name}</h3>
       <h4>This is a sample case description</h4>

       <Grid divided = 'vertically'>
         <Grid.Row columns= {16}>
             <Grid.Column width={10}>
            {this.renderCards()}
             </Grid.Column>

           <Grid.Column width={6}>
             <ContributeForm  rate ={this.props.rate} address={this.props.address} />
           </Grid.Column>

        </Grid.Row>  

      
        
        <Grid.Row columns = {16}>
      
          
        <Grid.Column width={16}>  
         <h3> Cases you donated to </h3>
          {this.renderOtherDonations()}
        </Grid.Column>
       

        </Grid.Row> 

       </Grid>  

       </Layout>

       )
     	
   }


}


export default DonationShow;