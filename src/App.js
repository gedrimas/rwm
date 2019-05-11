import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import ProjectPage from './components/ProjectPage'
import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 100%;
`

class App extends Component {
    render() {
      return (
        <AppWrapper>
          <Route path="/" exact component={Main} />
          <Route path="/:id" component={ProjectPage} />
        </AppWrapper>
      )    
    }
}

export default App
