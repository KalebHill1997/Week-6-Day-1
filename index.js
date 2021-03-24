import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Cary from "./Cary"
import Charlotte from "./Charlotte"
import Chicago from "./Chicago"
import TheTime from "./TheTime"

class Navbar extends Component {
  render(){
    return(
      // <div className="nav">
      //   <Link to="/">Charlotte</Link> | 
      //   <Link to="about">Cary</Link> | 
      //   <Link to="menu">Chicago</Link>
      // </div>
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
        </div>
        <ul class="nav navbar-nav">
          <li><Link to="/">Charlotte</Link></li> 
          <li><Link to="about">Chicago</Link> </li>
          <li><Link to="menu">Cary</Link></li>
        </ul>
      </div>
    </nav>
    );
  }
}

class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Route name="Charlotte" exact path="/" component={Charlotte}/>
          <Route name="Cary" path="/menu" component={Cary}/>
          <Route name="Chicago" path="/about" component={Chicago} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
