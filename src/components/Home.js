import React, { Component } from 'react';
import '..//assets/css/index.css'

class Home extends Component {


    constructor(props){

        super(props);

       
    }


    handleUsername=(e)=>{

      this.setState({
        username:e.target.value
      })
    }
    render() {
      return (




        <div  align="center">
  
<div class="font4">
<p>
<i>跑腿网欢迎你</i>
</p>
</div>

            
   
              <br />

        </div>
        
        
      );
    }
  }
  
  export default Home;
  