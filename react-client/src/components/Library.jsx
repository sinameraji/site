import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import Books from './Books'

class Library extends Component {
  render() {
      return (
        <Router>
          <div>
            <NavBar />
            <hr/>
            <Route name="home" exact path="/" component={Header} />
            <h2>My bookshelf</h2>
            <Books />
            <Footer />
          </div>
        </Router>
      )
    }
  }

  export default Library
