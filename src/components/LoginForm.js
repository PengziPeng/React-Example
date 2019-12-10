import React, { Component } from 'react';
import '..//assets/css/index.css'



class LoginForm extends Component {

 render(){


    return(

<div>
        <div class="headerBar">
            <div class="logoBar login_logo">
<div class="comwidth">

    <div class="logo f1">
        <a href="#"><img src="" alt="跑腿网">  </img></a>
    </div>
    <h3 class="welcome_title">欢迎登陆</h3>
</div>

            </div>

        </div>
        <div class="login_cont">

            <ul class="login">
                <li class="l_tit">  姓名</li>
                <li class="mb_10"><imput type="text" class="login_input user_icon1" id="uname"></imput></li>
                <li class="l_tit">密码</li>
                <li class="mb_10"><imput type="password" class="login_input" id="upass"></imput></li>
                <li><a href="#">忘记密码？</a></li>
                <li class="autoLogin"><input type="checkbox" id="a1" class="checked"></input><label for="a1">自动登陆</label></li>
                <li ><input type="button" value="" class="login_btn" onclick="ulogin()"></input></li>
{/*                 
<script language="javascript" type="text/javascript">
    function ulogin() {
        
    } {

    var userName = document.getElementById("uName0").value;

    
}




</script> */}
            </ul>
            <div class="login_partners">

                <p class="l_tit"> 使用合作方账号登陆网站</p>
                <ul class="login_list clearfix">
				<li><a href="#">QQ</a></li>
				<li><span>|</span></li>
				<li><a href="#">网易</a></li>
				<li><span>|</span></li>
				<li><a href="#">微信</a></li>
				<li><span>|</span></li>
				<li><a href="#">新浪微博</a></li>
				<li><span>|</span></li>
				<li><a href="#">腾讯微博</a></li>
			</ul>
            </div>
        </div>
        <a class="reg_link" href="注册.html"></a>
        
        <div class="hr_25"></div>
        <div class="footer">
            <p>  <a href="#">代拿简介</a>
            <i>|</i>
            
            </p>
        </div>

</div>

    )
 }

}






    
export default LoginForm;
