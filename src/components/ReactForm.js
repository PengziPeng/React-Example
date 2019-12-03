import React, { Component } from 'react';
import '..//assets/css/index.css'


class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            msg:"欢迎注册跑腿网",
            name:'填真实姓名',  
            sex:'1',     
            city:'',      
            citys:[ 
                
                '一栋','二栋','三栋','四栋','校外男一','校外男二'            
            ],
            hobby:[   
                {  
                    'title':"取快递",
                    'checked':false
                },
                {  
                    'title':"带外卖",
                    'checked':false
                },
                {  
                    'title':"其他(联系管理员)",
                    'checked':true
                }
            ],
            info:' 选填'   

        };

        this.handleInfo=this.handleInfo.bind(this);
    }
    handelSubmit=(e)=>{
            //阻止submit的提交事件

            e.preventDefault();
            
            console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);

    }
    handelName=(e)=>{
        this.setState({

            name:e.target.value
        })
    }

    handelSex=(e)=>{

        this.setState({

            sex:e.target.value
        })
    }

    handelCity=(e)=>{
        this.setState({

            city:e.target.value
        })

    }
    handelHobby=(key)=>{


        var hobby=this.state.hobby;

        hobby[key].checked=!hobby[key].checked;

        this.setState({

            hobby:hobby
        })
    }

    handleInfo(e){

        this.setState({

            info:e.target.value
        })
    }
    render() {
        return (
 <div class="loginBox">
            <div align="center" >

                <h2>{this.state.msg}</h2>

                <form onSubmit={this.handelSubmit}>

                  姓名 :  <input type="text" value={this.state.name}  onChange={this.handelName}/> <br /><br />

                学号： <input type="text" value={this.state.ID}  onChange={this.handelID}/> <br /><br />

                  性别:    <input type="radio" value="1" checked={this.state.sex==1}  onChange={this.handelSex}/>男 

                            <input type="radio"  value="2" checked={this.state.sex==2}  onChange={this.handelSex}/>女 <br /><br /> 



                 联系地址 :  

                        <select value={this.state.city} onChange={this.handelCity}>
                            {

                                this.state.citys.map(function(value,key){

                                    return <option key={key}>{value}</option>
                                })
                            }
                            
                        </select>


                <br /><br />


               服务方向:   
                    {
                        // 注意this指向
                        this.state.hobby.map((value,key)=>{

                            return (

                               <span key={key}>

                                    <input type="checkbox"  checked={value.checked}  onChange={this.handelHobby.bind(this,key)}/> {value.title} 
                               </span>
                            )
                        })
                    }

                    <br /><br />


                  备注：<textarea vlaue={this.state.info}  onChange={this.handleInfo} />

                  <br /><br />

                 <input type="submit" align="center" Value=" 刚刚注册"/>
                 

                  <br /><br /> <br /><br />


                </form>

            </div>
           </div>
        );
    }
}

export default ReactForm;
