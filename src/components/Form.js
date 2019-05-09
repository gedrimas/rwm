import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addProject, sendProject, editProject, generalFetch, formShow } from '../actions'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
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
 
    return (
      <StyledForm onSubmit={this.submit}>    
        Название проекта:<br />
        <input
          name="project_title"
          type="text"
          value={project_title}
          onChange={this.inputChange} />
        <br />
        Описание проекта:<br />
        <textarea
          name="description"
          value={description}
          onChange={this.inputChange} />
        <br />
        Ссылка на проект:<br />
        <input
          name="link"
          type="text"
          value={link}
          onChange={this.inputChange} />
        <br />
        <button
          type="submit"
        >
        {
          isEdit ? ( <span>Сохранить изменения</span> ) : ( <span>Добавить</span> )
        }
        </button>
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