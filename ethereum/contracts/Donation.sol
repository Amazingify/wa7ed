pragma solidity ^0.4.22 ; 




contract donationFactory {  // we use this factor to create the donation cases ,
                            // this is to prevent direct access to the main contract
    
    address[] public deployedRequests; 
    mapping(address => string) public titles;
    function createDonation(string description , uint targetAmount , address recipient , string PDF_link ) public {
        address newDonation = new Donation(description , targetAmount ,  recipient , PDF_link , msg.sender);
        deployedRequests.push(newDonation);
        titles[newDonation] = description;
    }
    
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedRequests;
    }
    
     function getTitle(address x) public view returns (string){
        return titles[x];
    }
    
}


contract Donation{
    
    
    struct Request {
        string description ; //description of the case
        string Documents_PDF_link; // pdf link for avialable documents;
        uint targetAmount ;  // traget amount of donation 
        address recipient;  // recipient
        bool complete ;   // completed flag
    
    }
    
       
       mapping(address => uint ) public donatedAmount ;
       Request[] public requests; // an array to contain the requests
       
       
     
  
   constructor(string description , uint targetAmount , address recipient , string PDF_link , address creator) public {
       
       require(creator!=recipient); // preventing the creator of the contract from sending the money to oneself
     
     Request memory newRequest = Request({  //creating a new request
         
         description : description,
         Documents_PDF_link: PDF_link,
         targetAmount : targetAmount*1000000000000000000 ,
         recipient : recipient,
         complete : false 
       
     });
     
     
     requests.push(newRequest); // adding the request to the requests array
     
   } 
   
   
   
   function contribute( uint request_number ) public payable{   
       
       request_number--;         // accesing from index 0
       require( msg.value > 0.01 ether );   // checking if the donated amount is greater than 0
       donatedAmount[msg.sender]+= msg.value;
       
    if(requests[0].targetAmount<=address(this).balance)
        requests[0].recipient.transfer(address(this).balance);
   }
   
   //getting the amount donated by a given public key
   function getDonatedAmount(address addr) public view returns(uint){
       return donatedAmount[addr];
   }
   
  

   function getSummary() public view returns (uint , uint,string ){

   return (
      
      address(this).balance ,
      requests[0].targetAmount,
      requests[0].description

    );

   }




}