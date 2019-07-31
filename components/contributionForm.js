import React , {Component} from 'react';
import {Form , Input , Message ,Button} from 'semantic-ui-react';
import Case from '../ethereum/case';
import web3 from '../ethereum/web3';
import {Router} from '../routes' ;
import fetch from 'isomorphic-unfetch'

class contributionForm extends Component {

    
    state = { 
      value : ''
    };

    onSubmit = async (event) =>{

    
        
     
        event.preventDefault();

        let amount = this.state.value / this.props.rate;
         
        const case1 = Case(this.props.address);

       try{

          const accounts= await web3.eth.getAccounts();
          console.log(accounts[0]);
         
          await case1.methods.contribute(1).send({
          
           from: accounts[0],
           value : web3.utils.toWei( String(amount) ,'ether')

          });

        Router.replaceRoute(`/donations/${this.props.address}`);

       } catch(err){ console.log(err)}
      
    };

   render(){


     return(

      <Form onSubmit ={this.onSubmit} >
       
       <Form.Field>
  
         <label> Amount to Contribute </label>
          <Input
           value = {this.state.value}
           onChange = {event => this.setState({value : event.target.value })}
           label="USD" 
           labelPosition = "right"/>

       </Form.Field>
         
       <Button primary>
       Contribute!
       </Button>

      </Form>

     );


   }


}

export default contributionForm;