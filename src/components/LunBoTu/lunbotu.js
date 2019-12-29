import React from "react";
import img1 from './image/01.jpg'
import img2 from './image/02.jpg'
import img3 from './image/03.jpg'
import img4 from './image/04.jpg'

var LunBoTuCss = require('./lunbotu.css')

export default class LunBoTu extends React.Component{
    render(){
        window.onload = function () {
            var broadcast = document.getElementById("broadcast"),
                img_list = document.getElementById("img_list"),
                button_list = document.getElementById("button_list").getElementsByTagName("li"),
                index = 0,
                timer = null;
                //初始化
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
           
                // 自动切换
                timer = setInterval(autoPlay, 4000);
           
                // 调用自动播放函数
                function autoPlay() {
                    index++;
                    if (index >= button_list.length) {
                        index = 0;
                    }
                    imgChange(index);
                }
            
            function imgChange(buttonIndex) {
                for (let i = 0; i < button_list.length; i++) {
                    button_list[i].className="";
                }
                
                img_list.style.marginLeft = -800 * buttonIndex + "px";
                index = buttonIndex;
            }
        }
        return(
            <div class="divbox">
            <div class="wrap">
                <div class="broadcast" id="broadcast">
                    <ul id="img_list">
                        <img src={img1} alt=""></img>
                        <img src={img2} alt=""></img>
                        <img src={img3} alt=""></img>
                        <img src={img4} alt=""></img>
                    </ul>
                    <ol id="button_list">
                        <li id="olli1"></li>
                        <li id="olli2"></li>
                        <li id="olli3"></li>
                        <li id="olli4"></li>
                    </ol>
                </div>
            </div>
            </div>
        )
    }
}
