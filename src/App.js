import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Main from "./pages/Main";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import StockValue from "./pages/StockValue";

// data from array
import data from "./components/StockData";


function App() {
  return (
    <div className="App">
      <Nav/>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/stocks/:symbol" render={(routerProps)=> <StockValue {...routerProps}/>}/>
      <Route path="/stocks">
        <Stocks/>
      </Route>
      
    </Switch>
    </div>
  );
}

export default App;
