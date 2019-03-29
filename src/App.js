import React, { Component } from 'react';
// 路由依赖
import { HashRouter, Route, Switch } from 'react-router-dom';
// 异步组件
import AsyncComponent from './components/asyncComponent.jsx';
// 组件页面
const Home = AsyncComponent(() => import(/* webpackChunkName: "Home" */ './components/Home/index.jsx'));
const City = AsyncComponent(() => import(/* webpackChunkName: "City" */ './components/City/index.jsx'));
const Search = AsyncComponent(() => import(/* webpackChunkName: "Search" */ './components/Search/index.jsx'));
const User = AsyncComponent(() => import(/* webpackChunkName: "User" */ './components/User/index.jsx'));
const NotFound = AsyncComponent(() => import(/* webpackChunkName: "NotFound" */ './components/NotFound/index.jsx'));
const Detail = AsyncComponent(() => import(/* webpackChunkName: "Detail" */ './components/Detail/index.jsx'));
const Login = AsyncComponent(() => import(/* webpackChunkName: "Login" */ './components/Login/index.jsx'));

class App extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount(){
    //let json = await (await fetch('/data.json')).json;
    fetch("./data.json")
     .then(res => {
      res.json().then((data)=>{
        console.log(data);
      })
     })
     .then(json => console.log(json))
}
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/city" component={City} />
          <Route path="/Search/:category/:keyword?" component={Search} />
          <Route path="/User" component={User} />
          <Route path="/Detail/:id" component={Detail} />
          <Route path="/login/:router?" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
