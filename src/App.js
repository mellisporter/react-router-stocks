import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router';
import Nav from "./components/Nav";
import Main from "./pages/Main";
import About from "./pages/About";
import Stocks from "./pages/Stocks";

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
      <Route path="/stocks">
        <Stocks/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
