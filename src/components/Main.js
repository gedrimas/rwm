import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ModalForm from './ModalForm'
import ProjectBlock from './ProjectBlock'
import { generalFetch } from '../actions'

const MainWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
color: red;
`
const AddButton = styled.button`
color: blue;
margin: 30px 0;
width: 100px;
`

class MainPage extends Component {

  state = {
    isModalFormShow: false,
    posts: []
  }

  componentDidMount() {
    const { getData } = this.props
    getData()
  }
  
  showModalForm = () => {
    this.setState({
      isModalFormShow: !this.state.isModalFormShow
    })
  }

  render() {
    const { isModalFormShow, posts } = this.state
    const { projects } = this.props
    return(
        <MainWrapper>
            <AddButton
            onClick={this.showModalForm}
            >
              Добавить прект
            </AddButton>
            {
              isModalFormShow && <ModalForm />
            }
            <h1>{posts}</h1>
              {
                projects &&
                <ProjectBlock projects={projects} />
              }
        </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(generalFetch())
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default Main