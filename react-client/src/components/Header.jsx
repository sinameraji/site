import React, { Component } from 'react'

class Header extends Component {
    render() {
      return (
        <div>
          {/* <p>Hi! I'm Sina Meraji, a 3rd year artificial intelligence undergrad at University of Malaya. I'm from Iran, but I've been living in Malaysia for the past 8 years. 
            I have a <i>side passion</i> for building little blocks of human lifestyle and test them in my communities. 
          </p> */}
          <h2>Side projects</h2>
          <ul class="solution">
            <li>App Club</li>
            <li>CrossFac</li>
            <li>CrossUni</li>
            <li>AI Newsletter (work in progress)</li>
          </ul>
        </div>
      )
    }
  }

  export default Header;
