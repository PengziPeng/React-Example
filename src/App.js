import React, { Component } from 'react';

import Home from './components/Home.js';

import { BrowserRouter ,Route,Switch,Link} from 'react-router-dom'
import LoginForm from './components/LoginForm.js';
import ReactForm from './components/ReactForm.js';
import Zhuyemian from './components/Zhuyemian.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Home />
 <br />
         
         <br />


       
         
         

        
        <BrowserRouter>

          <Switch>
           
           <Route path ="/ReactForm" component={ReactForm}></Route>
           <Route path="/LoginForm" component={LoginForm}></Route>
           <Route path="/Zhuyemian" component={Zhuyemian}></Route>
         </Switch>
         
         
         </BrowserRouter>
        

        {/* <ReactForm /> */}
         

       

   
</div>
    );
  }
}

export default App;
