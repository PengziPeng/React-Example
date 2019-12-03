import React, { Component } from 'react';
import '..//assets/css/index.css'
import ReactForm from ReactForm;
import { BrowserRouter as Router,Route} from 'react-router-dom';

class Home extends Component {


    constructor(props){

        super(props);

       
    }


    render() {
      return (


<Router >
                <div>
<Route path="/ReactForm" component={ReactForm} />


</div>
</Router>

        
      );
    }
  }
  
  export default Zhuyemian;
  