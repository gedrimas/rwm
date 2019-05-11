import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ModalForm from './ModalForm'
import ProjectBlock from './ProjectBlock'
import { generalFetch, formEdititng, formShow } from '../actions'
import Pagination from './Pagination'
//https://paletton.com/#uid=3510u0kT4GTqpQmBXS6T6sESRma
const MainWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #D300A5;
height: 100%;
padding-top: 40px;
`
const AddButton = styled.div`
margin: 10px 0;
width: 32px;
height: 32px;
background-image:url('./src/accessories/icons/add32.png');
box-shadow: 0 0 10px white;
border-radius: 25px;
background-color: #4CE900;
:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #800064;
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
            />
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