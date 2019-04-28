import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ModalForm from './ModalForm'
import ProjectBlock from './ProjectBlock'
import { generalFetch } from '../actions'
import Pagination from './Pagination'

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
    paginationChunck: [],
    isPaginationClicked: false
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

  getPaginationChunck = (pages) => {
    const { projects } = this.props
    const start = pages*3 - 3
    const end = pages*3 
    console.log('start', start)
    console.log('end', end)

    const chunck = projects.slice(start, end)
    console.log('chuncks', chunck)
    console.log('pages', pages)    
    console.log('projects', projects)
    this.setState({
      paginationChunck: chunck,
      isPaginationClicked: true
    })    

  }

  render() {
    const { isModalFormShow, paginationChunck, isPaginationClicked } = this.state
    const { projects } = this.props
    //const projectsToShow = isPaginationClicked ? paginationChunck : projects.slice(0, 3)

    return (
        <MainWrapper>
            <AddButton
            onClick={this.showModalForm}
            >
              Добавить прект
            </AddButton>
            {
              isModalFormShow && <ModalForm />
            }
            {
              projects &&
              <ProjectBlock projects={isPaginationClicked ? paginationChunck : projects.slice(0, 3)} />
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