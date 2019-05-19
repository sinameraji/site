import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
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
                <li><a href="/">Home</a></li>
                <li><a href="https://www.facebook.com/AppClubUM/">Library</a></li>
                <li><a href="http://medium.com/@sinameraji">Blog</a></li>
                <li><a href="http://medium.com/@sinameraji">Side projects</a></li>
                <li><a href="https://github.com/sinameraji/">GitHub</a></li>
                {/* <li><a href="https://www.facebook.com/AppClubUM/">App Club😍</a></li> */}
              </ul>
            </div>
          </nav>
        </header>
      )
    }
  }

  export default NavBar;
