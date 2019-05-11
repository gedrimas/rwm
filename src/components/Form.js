import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addProject, sendProject, editProject, generalFetch, formShow } from '../actions'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Montserrat Alternates', sans-serif;
`
const StyledSubmit = styled.button`
border-radius: 2px;
background-color: #FFF100;
:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #A1B700;
}
`

class AddForm extends Component {
  state = {
    project_title: '',
    description: '',
    link: '',
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submit = (e) => {
    const { sendToJSONserver, 
      editProject, 
      isEdit, 
      editingProjectId, 
      generalFetch,
      formShow 
    } = this.props

  e.preventDefault()
  const formElemnt = document.querySelector('form')
  const formData = new FormData(formElemnt)
  let object = {};
  formData.forEach((value, key) => {object[key] = value});
  const jsonFromData = JSON.stringify(object);
    if(!isEdit){ 
      sendToJSONserver(jsonFromData)
      setTimeout(() => generalFetch(), 3000)      
    }else {
      editProject(jsonFromData, editingProjectId)
      setTimeout(() => generalFetch(), 3000)
    }
    formShow(true)
  }

  render() {
    const {
      project_title,
      description,
      link,
    } = this.state
    
    const { isEdit } = this.props
 
    const inputStyle = {
      borderRadius: '2px',
      border: '1px solid #A1B700',
      resize: 'none' 
    }

    return (
      <StyledForm onSubmit={this.submit}>    
        Project name:<br />
        <input
          name="project_title"
          type="text"
          value={project_title}
          onChange={this.inputChange}
          style={inputStyle}  
        />
        <br />
        Project description:<br />
        <textarea
          name="description"
          value={description}
          onChange={this.inputChange}
          style={inputStyle}
          rows="6"
          cols="30"
        />
        <br />
        Link to the project:<br />
        <input
          name="link"
          type="text"
          value={link}
          onChange={this.inputChange}
          style={inputStyle}
        />
        <br />
        <StyledSubmit
          type="submit"
        >
        {
          isEdit ? ( <span style={{fontSize: '16px'}}>Save change</span> ) : ( <span style={{fontSize: '16px'}}>Add</span> )
        }
        </StyledSubmit>
      </StyledForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit,
    editingProjectId: state.editingProjectId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (newProject) => {
      dispatch(addProject(newProject))
    },
    sendToJSONserver: (formData) => {
      dispatch(sendProject(formData))
    },
    editProject: (formData, id) => {
      dispatch(editProject(formData, id))
    },
    generalFetch: () => {
      dispatch(generalFetch())
    },
    formShow: (show) => dispatch(formShow(show)) 
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default Form