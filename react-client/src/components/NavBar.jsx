import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <header>
          <h1>SinaLab</h1>
          <h4>this was one of my new year resolutions last year, kinda overdue.</h4>
          <nav>
            <input type="checkbox" id="nav" class="hidden"/>
            <label for="nav" class="nav-open"><i></i></label>
            <div class="nav-container">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="https://www.facebook.com/AppClubUM/">App Club😍</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Github</Link></li>
              </ul>
            </div>
          </nav>
            
            
            
{/*             
            <ul id="headerButtons">
              <li className="navButton"><Link to="">Home</Link></li>
              <li className="navButton"><Link to="">Book collection</Link></li>
              <li className="navButton"><Link to="">Github</Link></li>
              <li className="navButton"><Link to="">Blog</Link></li>
            </ul> */}
        </header>
      )
    }
  }

  export default NavBar;
