import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <header>
          <h1>SinaLab</h1>
          <div class="card-container"><h4>Artificial intelligence undergrad at University of Malaya, <br/> with a <i>side passion</i> for building and testing little blocks of human lifestyle.</h4></div>
          <nav>
            <input type="checkbox" id="nav" class="hidden"/>
            <label for="nav" class="nav-open"><i></i></label>
            <div class="nav-container">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="https://www.facebook.com/AppClubUM/">App Club</Link></li>
                <li><Link to="http://medium.com/@sinameraji">Blog</Link></li>
                <li><Link to="https://github.com/sinameraji/">GitHub</Link></li>
                <li><Link to="https://www.linkedin.com/in/sinameraji/">Linkedin</Link></li>
              </ul>
            </div>
          </nav>
        </header>
      )
    }
  }

  export default NavBar;
