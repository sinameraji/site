import React, { Component } from 'react';

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
                <li><a href="/">Home</a></li>
                <li><a href="https://www.facebook.com/AppClubUM/">App Club😍</a></li>
                <li><a href="http://medium.com/@sinameraji">Blog</a></li>
                <li><a href="https://github.com/sinameraji/">GitHub</a></li>
              </ul>
            </div>
          </nav>
        </header>
      )
    }
  }

  export default NavBar;
