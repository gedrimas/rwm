import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { formShow, formEdititng, choseProject, deleteProject, generalFetch } from '../actions'

const StyledProjectBlock = styled.div`
height: 100px;
width: 700px;
background-color: #4CE900;
margin: 10px;
display:flex;
justify-content: space-between;
border-radius: 5px;
:hover {
  box-shadow: 0 0 10px #800064;
  cursor: pointer;
 }
`
const StyledControlWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin: 10px;
`

const StyledPencil = styled.div`
width: 24px;
height: 24px;
background-image:url('./src/accessories/icons/edit.png');
margin-right: 5px;
:hover {
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 0 10px #329900; 
`

const StyledTrash = styled.div`
width: 24px;
height: 24px;
background-image:url('./src/accessories/icons/remove.png');
:hover {
  cursor: pointer;
  border-radius: 25px;
  box-shadow: 0 0 10px #329900;
}
`
const BlockTitle = styled.h3`
  align-self: center; 
  margin-left: 10px;
  color: #2506CE;
  font-family: 'Seymour One', sans-serif;
`
const BlockName = styled.span`
  color: #D300A5; 
  font-family: 'Montserrat Alternates', sans-serif;
`

class Block extends Component {

  setEditingForm = (id, e) => {
    const{ formEdititng, formShow, choseProject } = this.props
    e.stopPropagation()
    formShow(true)
    formEdititng(true)
    choseProject(id)
  }

  deleting = (id, e) => {
    const { deleteProject, getData } = this.props
    e.stopPropagation()
    deleteProject(id)
    setTimeout(()=>{
      getData()
    }, 500)
  }

  
  render() {
    const { projects, history } = this.props
    const allProjects = projects.map((itm, index) => 
      <StyledProjectBlock 
        key={index}
        onClick={() => history.push('/' + itm.id)}
      >
        <BlockTitle> Project: <br />
          <BlockName>{itm.project_title}</BlockName>
        </BlockTitle>
        <StyledControlWrapper>
          <StyledPencil onClick={(e) => this.setEditingForm(itm.id, e)}/>
          <StyledTrash onClick={(e) => this.deleting(itm.id, e)}/>
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
    choseProject: (id) => dispatch(choseProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    getData: () => dispatch(generalFetch()),
  }
}

const ProjectBlock = connect(mapStateToProps, mapDispatchToProps)(Block)

export default withRouter(ProjectBlock)
