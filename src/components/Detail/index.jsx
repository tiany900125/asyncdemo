import React,{Component} from 'react';

class Detail extends  Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
    const query = this.props.match.params;
    console.log(query);

  }
  render(){
    return (
      <div>Detail</div>
    );
  }  
}

export default Detail;