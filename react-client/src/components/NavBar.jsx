import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <header>
          <h1>SinaLab</h1>
        
          <nav>
            <input type="checkbox" id="nav" class="hidden"/>
            <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
            <div class="nav-container">
              <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
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
