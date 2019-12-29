import React, { Component } from 'react';
import '../assets/css/login.css';

import {Link} from 'react-router-dom'


class LoginForm extends Component {

 render(){


    return(
        <div>
            <div class="div1">
                <img>
                </img>
                <p class="div2">欢迎登陆</p>
            </div>
            <div class="div4">
                <table>
                <div class="div5">
            <table align="center" class="div6">
                <tr>
                    <td class="div13">邮箱/用户名/学号</td>
                </tr>
                    <input type="text" placeholder="请输入用户名" class="div7"></input>
                    <input type="text" placeholder="请输入密码" class="div8"></input>
                    
                    
                        <td class="div9">密码
                    </td>
                        <td class="div10">
                            自动登录
                        </td>
                      <a href ="www.baidu.com" class="div11">忘记密码？</a>
                    
                    <input type="checkbox" class="div12"></input>
                    <button class="div14">登录</button>
                    <Link to='SignUp'><button class="div15">免费注册>></button></Link>
            </table>
            </div>
            </table>
            </div>
        </div>
    )
 }

}






    
export default LoginForm;
