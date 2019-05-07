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
    const { getData, paginationPage } = this.props
    getData()
    if(paginationPage) {
      setTimeout(this.getPaginationChunck(paginationPage), 500)
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.projects !==  this.props.projects){
      const { paginationPage } = this.props
      if(paginationPage) {
        setTimeout(this.getPaginationChunck(paginationPage), 500)
      }
    }
  }
  
  showModalForm = () => {
    const { formShow } = this.props
    formShow(true)
  }

  getPaginationChunck = (pages) => {
    const { projects } = this.props
    const start = pages*5 - 5
    const end = pages*5 
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
    const { projects, isFormShown, paginationPage } = this.props

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
                projects={isPaginationClicked ? paginationChunck : projects.slice(0, 5)}
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
    isFormShown: state.isFormShown,
    paginationPage: state.paginationPage
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