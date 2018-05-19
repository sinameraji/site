import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import Books from './Books'
import SideProjects from './SideProjects'

class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <NavBar />
            <hr/>
            <Route name="home" exact path="/" component={Header} />
            <h2>My bookshelf</h2>
            <Books />
            <h2>Creations</h2>
            <SideProjects />
            <hr/>
            <Footer />
          </div>
        </Router>
      )
    }
  }

  export default App
