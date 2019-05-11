import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'

const StyledProjectPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF100;
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 0 50px;
  height: 100%;
`

class Project extends Component {

  state = {
    choesenProject: ''
  }
  componentDidMount(){
    const { match: {
        params: {
          id
        }
      }, projectsArry  
    } = this.props

    const choesenProject = projectsArry.filter((itm) => +itm.id === +id)[0]
    this.setState({ choesenProject })
  }
  
  render() {
    const { choesenProject } = this.state

    return (
      <>
      { choesenProject &&
        <StyledProjectPage>
          <h1>{choesenProject.project_title}</h1><hr /><br />
          <p>{choesenProject.description}</p><br />
          <Linkify>{choesenProject.link}</Linkify><br />
        </StyledProjectPage>
        }
        </>  
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    projectsArry: state.projects
  }
}

const ProjectPage = connect(mapStateToProps)(Project)

export default ProjectPage