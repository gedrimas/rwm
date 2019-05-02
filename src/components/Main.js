import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ModalForm from './ModalForm'
import ProjectBlock from './ProjectBlock'
import { generalFetch, formEdititng, formShow } from '../actions'
import Pagination from './Pagination'

const MainWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const AddButton = styled.button`
color: blue;
margin: 30px 0;
width: 100px;
`

class MainPage extends Component {

  state = {
    paginationChunck: [],
    isPaginationClicked: false
  }

  componentDidMount() {
    const { getData } = this.props
    getData()
  }
  
  showModalForm = () => {
    const { formEdititng, formShow } = this.props
    //formEdititng(false)
    formShow(true)
  }

  getPaginationChunck = (pages) => {
    const { projects } = this.props
    const start = pages*3 - 3
    const end = pages*3 
    const chunck = projects.slice(start, end)

    this.setState({
      paginationChunck: chunck,
      isPaginationClicked: true
    })    
  }

  getEditForm = (editingProject) => {
    const { formEdititng } = this.props
    formEdititng(true)
    this.showModalForm()
  }

  render() {
    const { paginationChunck, isPaginationClicked } = this.state
    const { projects, isFormShown } = this.props
    //const projectsToShow = isPaginationClicked ? paginationChunck : projects.slice(0, 3)

    return (
        <MainWrapper>
            <AddButton
            onClick={this.showModalForm}
            >
              Добавить прект
            </AddButton>
            {
              isFormShown && <ModalForm />
            }
            {
              projects &&
              <ProjectBlock 
                projects={isPaginationClicked ? paginationChunck : projects.slice(0, 3)}
                edit={() => this.getEditForm(true)} 
              />
            }
            {
              projects &&
              <Pagination 
                allProjects={projects} 
                getPaginationChunck={this.getPaginationChunck} 
              />
            }  
        </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    isFormShown: state.isFormShown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(generalFetch()),
    formEdititng: (edit) => dispatch(formEdititng(edit)),
    formShow: (show) => dispatch(formShow(show))
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default Main