import  React , {Component} from 'react';
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import {Form , Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';


class DonationNew extends Component{


state = {

  TargetAmount : "" ,
  Recipient: "" ,
  title : "" ,
  address: "hii"
}; 



onSubmit = async (event) =>{

 event.preventDefault();
 
 const accounts = await web3.eth.getAccounts();
 console.log(accounts[0]);
 await factory.methods
 .createDonation(this.state.title , this.state.TargetAmount , this.state.Recipient , "")
 .send({
   from:accounts[0]
 }) ;

 Router.pushRoute('/');

};


render(){

return(
      <Layout>
	 <h1> Create a new Donation Case</h1>

    <Form onSubmit = {this.onSubmit}> 

    <Form.Field>

     <label>Case Title</label>

     <input label = "Wei"  labelposition ="right"
     
     value = {this.state.title}
     onChange = { event => this.setState({title : event.target.value})}

     />

    </Form.Field>


    <Form.Field>

     <label>Target Amount of Donations</label>

     <input label = "Wei"  labelposition ="right"
     
     value = {this.state.TargetAmount}
     onChange = { event => this.setState({TargetAmount : event.target.value})}

     />

    </Form.Field>

    <Form.Field>
     <label> Recipient Address  </label>
     <input  value = {this.state.Recipient}
     onChange = {event=>this.setState({ Recipient: event.target.value })}
        />

    </Form.Field>



    <Button primary> Create a new Case </Button>

    </Form>

	</Layout>
	);
}



}


export default DonationNew;