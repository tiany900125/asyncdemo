import React,{Component} from 'react';
import {Link } from "react-router-dom";
require('./home.css');

class Home extends  Component{
  constructor(props){
    super(props);
    this.state = {
        data:[],
        provinces:[],
        banks:[]
    }
  }

  async componentDidMount(){

    let arr = await (await fetch(`./data.json`)).json();
    console.log(`arr:home-`,arr);
    //   fetch('./data.json')
    //   .then(res => {
    //       console.log(`res== `,res);
    //   })
    //   .then(json=>{
    //       console.log(`json: `+json);
    //   })
    //   .catch(err=>console.log(err));
    this.setState({
        data : arr,
        provinces : arr[0].provinces,
        banks: arr[0].banks
        
    });
    console.log(`banks22:   `,this.state.banks);
  }
  render(){
    return (
      <div>
          <p>Home</p>
          <ul>
            <li><Link to="/home">首页</Link></li>
            <li><Link to="/city">city</Link></li>
          </ul> 
         {
            this.state.data.map((item,index)=>{
               return (
                   <ul key={index}>
                        <li>省份：</li>
                        <li>{item.provinces[index].provinceName}</li>
                        <li>省份id：</li>
                        <li>{item.provinces[index].provinceCode}</li>
                        <li>城市名称</li>
                        <li>{item.provinces[index].city[0].cityName}</li>
                   </ul>
               ) 
            })

          }
      <p>城市===========================================================================</p>  
        {
            this.state.provinces.map((item,index)=>{
               return (
                   <ul key={index}>
                        <li>省份：</li>
                        <li>{item.provinceName}</li>
                        <li>省份id：</li>
                        <li>{item.provinceCode}</li>
                        <li>城市名称</li>
                        <li>{item.city[0].cityName}</li>
                   </ul>
               ) 
            })

          }
<p>银行===========================================================================</p>
        {
            this.state.banks.map((item,index)=>{
               return (
                   <ul key={index}>
                        <li>银行编号：</li>
                        <li>{item.bankCode}</li>
                        <li>银行名称：</li>
                        <li>{item.bankName}</li>
                   </ul>
               ) 
            })

          }
      </div>

    );
  }  
}

export default Home