import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { formShow, formEdititng } from '../actions'

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

  setEditingForm = () => {
    console.log(this.props)
    const{ formEdititng, formShow } = this.props
    formShow(true)
    formEdititng(true)
  }
  
  render() {
    const { projects, edit, formShow } = this.props
    const allProjects = projects.map((itm, index) => 
      <StyledProjectBlock key={index}>
        <h3 style={{alignSelf:'center', marginLeft: '10px'}}> Проект: <br />
        {itm.project_title}
        </h3>
        <StyledControlWrapper>
          <StyledPencil onClick={this.setEditingForm}/>
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
    pro: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formShow: (show) => dispatch(formShow(show)),
    formEdititng: (edit) => dispatch(formEdititng(edit))
  }
}

const ProjectBlock = connect(mapStateToProps, mapDispatchToProps)(Block)

export default ProjectBlock
