import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { formShow, formEdititng, choseProject } from '../actions'

const StyledProjectBlock = styled.div`
height: 100px;
width: 700px;
background: #F6A300;
margin: 10px;
display:flex;
justify-content: space-between;
`
const StyledControlWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 10px;
`

const StyledPencil = styled.div`
width: 32px;
height:32px;
background-image:url('./src/accessories/icons/pencil32.png');
margin-right: 35px;
:hover {
  cursor: pointer;
  
`

const StyledTrash = styled.div`
width: 32px;
height:32px;
background-image:url('./src/accessories/icons/trash32.png');
position:fixed;
:hover {
  cursor: pointer;
  
}
`

class Block extends Component {

  shouldComponentUpdate(){
    const { projects, edit, formShow } = this.props

    console.log('shouldComoponentUpdate', projects)
    return true
  }

  setEditingForm = (id) => {
    console.log('name of project', id)
    const{ formEdititng, formShow, choseProject } = this.props
    formShow(true)
    formEdititng(true)
    choseProject(id)
  }
  
  render() {
    const { projects, edit, formShow } = this.props
    const allProjects = projects.map((itm, index) => 
      <StyledProjectBlock key={index}>
        <h3 style={{alignSelf:'center', marginLeft: '10px'}}> Проект: <br />
        {itm.project_title}
        </h3>
        <StyledControlWrapper>
          <StyledPencil onClick={() => this.setEditingForm(itm.id)}/>
          <StyledTrash />
        </StyledControlWrapper>
      </StyledProjectBlock>)
      return (
        <React.Fragment>
          {
            allProjects
          }
        </React.Fragment>
          
      )
    }
}

const mapStateToProps = (state) => {
  return{
    actualPropjects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formShow: (show) => dispatch(formShow(show)),
    formEdititng: (edit) => dispatch(formEdititng(edit)),
    choseProject: (id) => dispatch(choseProject(id))
  }
}

const ProjectBlock = connect(mapStateToProps, mapDispatchToProps)(Block)

export default ProjectBlock
