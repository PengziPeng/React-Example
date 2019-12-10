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
  
<div class="font4"  >
  <br/>
<p>
<i>跑腿网欢迎你
 
</i>
</p>
<br /><br /><br />
<hr/>
<br />
<br /><br /><br />
<div class="font3">
<p>
<i>进入</i>
</p>
</div>


</div    >

   
              <br />
            

        </div>
         
        
      );
    }
  }
  
  export default Home;
  