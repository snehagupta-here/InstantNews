import React, { Component } from 'react'
import NavBar from './NavBar'
import News from './News'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
export default class App extends Component {
  a="hi"
  render() {
    return (
      // <div>
      //   {this.a} my class based  component
      // </div>
      <>
      <Router>
        <NavBar />    
        <Routes>
          <Route exact path="/"  element={ <News key="general" country="in" category="general" />} />
          <Route exact path="/entertainment"  element={<News key="entertainment" category="entertainment" />} />
          <Route exact path="/health"  element={<News key="health" category="health" />} />
          <Route exact path="/science"  element={<News key="science" category="science" />} />
          <Route exact path="/sports"  element={<News key="sports" category="sports" />} />
          <Route exact path="/technology"  element={<News key="technology" category="technology" />} />
          <Route exact path="/business"  element={<News key="business" category="business" />} />
        </Routes>
      </Router>
      </>
      
    )
  }
}
