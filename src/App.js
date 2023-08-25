
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default  class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route  exact path="/"><News key="gen" pagesize={5} country={"in"} category="general"/></Route>
            <Route  exact path="/sports"><News key="sports" pagesize={5} country={"in"} category="sports"/></Route>
            <Route  exact path="/technology"><News key="tech" pagesize={5} country={"in"} category="technology"/></Route>
            <Route  exact path="/health"><News key="hlth" pagesize={5} country={"in"} category="health"/></Route>
            <Route  exact path="/entertainment"><News key="entertainment" pagesize={5} country={"in"} category="entertainment"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

