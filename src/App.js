import React, { Component } from 'react'
import NavBar from './NavBar'
import News from './News'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
 apikey = process.env.REACT_APP_NEWS_API;
  state = {
              progress:0
  }
  
  setProgress = (progress) => {
       this.setState({
        progress:progress
       })
  }

  render() {
    return (
    
      // <div>
      //   {this.a} my class based  component
      // </div>
      <>
      <Router>
   
     
        <NavBar />  
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
      />  
     
        <Routes>
          <Route exact path="/"  element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general" country="in" category="general" />} />
          <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" />} />
          <Route exact path="/health"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" />} />
          <Route exact path="/science"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" />} />
          <Route exact path="/sports"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" />} />
          <Route exact path="/technology"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" />} />
          <Route exact path="/business"  element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" />} />
        </Routes>

      </Router>
      </>
      
    )
  }
}
