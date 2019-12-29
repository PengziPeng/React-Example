import React,{Component} from 'react';
import '../assets/css/signup.css'
import LunBoTu from './LunBoTu/lunbotu';

import {Link} from 'react-router-dom'

class SignUp extends Component { 
     constructor(props) {
    super(props);
    this.state = {}
}

    render(){

        return(
              <div>
                <LunBoTu></LunBoTu>
               
                   <div class="div1">
                    <div class="div2">
                        我已注册> <Link to='LoginForm'><a href ="www.baidu.com">登录</a></Link>
                    </div>
                    <div >
                        <p class="div4">欢迎注册跑腿网</p>

                    
                    </div>
                    <input type="text" placeholder="帐号" class="div3"></input>
                    <input type="text" placeholder="密码" class="div5"></input>
                    <button class="div6">立即注册</button>
                    <input type="checkbox" class="div7"></input>
                    <p class="div8">我已阅读并同意相关服务条款和隐私政策</p>
                    <p class="div9">《服务条款》</p>
                     <p class="div10">《隐私政策》</p>
                     
                       
                         <img class="div11"></img>
                      <p class="div12">联系我们：</p> 
                   </div>
               
            </div>
        )
    }
}


export default SignUp;