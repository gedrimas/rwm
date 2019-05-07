import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import ProjectPage from './components/ProjectPage'

class App extends Component {
    render() {
      return (
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/:id" component={ProjectPage} />
        </div>
      )    
    }
}

export default App
