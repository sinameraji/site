import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Books from './Books';
import Library from './Library';
import Header from './Header';

class NavBar extends Component {
    render() {
      return (
        <Router>
          <header>
            <div class="harambe">
              <img src={ require('../images/sina.jpg') } height="20em"/>
            </div>
            <a id ="sina" href="/"><h1>Sina Meraji</h1></a>
            <div class="card-container"><h4>Technical generalist, AI Product Manager at Supahands.com <br/> I have a <i>side passion</i> for building, testing and optimising little blocks of human lifestyle.</h4></div>
            <nav>
              <input type="checkbox" id="nav" class="hidden"/>
              <label for="nav" class="nav-open"><i></i></label>
              <div class="nav-container">
                <ul>
                  <li><Link to="/">Home></Link></li>
                  <li><Link to="/library">Library</Link></li>
                  <li><a href="http://medium.com/@sinameraji">Blog</a></li>
                  <li><a href="#">Side projects</a></li>
                  <li><a href="https://github.com/sinameraji/">GitHub</a></li>
                  {/* <li><a href="https://www.facebook.com/AppClubUM/">App Club😍</a></li> */}
                </ul>
                <Route path="/library/" component={Books} />
                <Route name="home" exact path="/" component={Header} />
              </div>
            </nav>
          </header>
        </Router>
      )
    }
  }

  export default NavBar;
