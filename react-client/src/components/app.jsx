import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import Cards from './Cards'


class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <NavBar />
            <hr/>
            <Route name="home" exact path="/" component={Header} />
            <h2>My bookshelf</h2>
            <Cards />
            <hr/>
            <Footer />
          </div>
        </Router>
      )
    }
  }

  export default App