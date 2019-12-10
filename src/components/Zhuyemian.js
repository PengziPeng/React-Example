import React, { Component } from 'react';

import LoginForm from './LoginForm.js';
import { BrowserRouter ,Route,Switch,Link} from 'react-router-dom';
import ReactForm from './ReactForm.js';


class Zhuyemian extends Component {

  render() {
    return (
      <div className="Zhuyemian">
     
 <br />
        
         <br />

        
        <BrowserRouter>
<div>
  <header className="title">

  <Link to="/ReactForm"> 55
 </Link>
  
  </header>
          <Switch>
           
           <Route path ="/ReactForm" component={ReactForm}></Route>
           <Route path ="/LoginForm" component={LoginForm}></Route>
           
         </Switch>
         
         </div>
         </BrowserRouter>
        

         

       
<hr />
   
</div> 
    );
  }
}

export default Zhuyemian;
