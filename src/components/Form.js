import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addProject } from '../actions'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

class AddForm extends Component {
  state = {
    project: '',
    disc: '',
    link: '',
    file: '',
  }

  fileInput = React.createRef() 

  inputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submit = (e) => {
    const { add } = this.props

    e.preventDefault()
    add(this.state)
  }

  getstate = () => {
    const { prostate } = this.props
  }

  render() {
    const {
      project,
      disc,
      link,
      file,
    } = this.state
    return (
      <StyledForm onSubmit={this.submit}>
        <label>
          Название проекта:<br />
          <input
            name="project"
            type="text"
            value={project}
            onChange={this.inputChange} />
        </label><br />
        <lablel>
          Описание проекта:<br />
          <textarea
            name="disc"
            value={disc}
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
        <label style={{width: '200px'}}>
          Загрузить изображение<br />
          <input
            type="file"
            ref={this.fileInput} />
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
    prostate: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (newProject) => {
      dispatch(addProject(newProject))
    }
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm)

export default Form