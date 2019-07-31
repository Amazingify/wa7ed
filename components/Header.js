import React from 'react';
import { Menu } from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
       <Menu>
 
       <Link route=  "/"> 
      
       <a className="item"> 
        Transerity
       </a>
       
       </Link>

       <Menu.Menu position = "right" >
       

       <Link route=  "/"> 
      
       <a className="item"> 
        Donation Cases
       </a>
       
       </Link>


       <Link route=  "/donations/new"> 
      
       <a className="item"> 
        New Case
       </a>
       
       </Link>


       </Menu.Menu>
    </Menu>
  );
};