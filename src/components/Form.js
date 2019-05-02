import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addProject, sendProject } from '../actions'

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
    const { add, sendToJSONserver } = this.props

    e.preventDefault()
    //add(this.state)
    const formElemnt = document.querySelector('form')
    const formData = new FormData(formElemnt)
    
   
    let object = {};
    formData.forEach((value, key) => {object[key] = value});
    const jsonFromData = JSON.stringify(object);
    sendToJSONserver(jsonFromData)

  }

  getstate = () => {
    const { prostate } = this.props
  }

  render() {
    const {
      project_title,
      description,
      link,
    } = this.state
 
    return (
      <StyledForm onSubmit={this.submit}>
        <label>
          Название проекта:<br />
          <input
            name="project_title"
            type="text"
            value={project_title}
            onChange={this.inputChange} />
        </label><br />
        <lablel>
          Описание проекта:<br />
          <textarea
            name="description"
            value={description}
            onChange={this.inputChange} />
        </lablel><br />
        <label>
          Ссылка на проект:<br />
          <input
            name="link"
            type="text"
            value={link}
            onChange={this.inputChange} />
        </label><br />
        <button
          type="submit"
        >
          Добавить
        </button>
      </StyledForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (newProject) => {
      dispatch(addProject(newProject))
    },
    sendToJSONserver: (formData) => {
      dispatch(sendProject(formData))
    }
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default Form