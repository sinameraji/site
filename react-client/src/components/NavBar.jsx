import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <header>
          <div class="harambe">
            <img src={ require('../images/sina.jpg') } height="20em"/>
          </div>
          <a id ="sina" href="/"><h1>SinaLab</h1></a>
          <div class="card-container"><h4>Technical generalist, BSc. Computer Science (Major in Artificial Intelligence), and soon to be MSc. Data Science <br/> Passionate about craftsmanship, leadership, education and personalization.<br/> I have a <i>side passion</i> for building, testing and optimising little blocks of human lifestyle.</h4></div>
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
