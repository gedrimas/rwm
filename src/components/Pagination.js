import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPage } from '../actions'
import styled from 'styled-components'


class PaginationPages extends Component {
  
  handleClick = (e) => {
    const { getPaginationChunck, selectPage } = this.props
    e.preventDefault()
    const itm = e.target.innerHTML
    getPaginationChunck(itm)
    selectPage(itm)
  }
  
  render() {
    const { allProjects, paginationPage } = this.props
    
    const StyledPaginationItm = styled.a`
    text-decoration: none;
    margin: 0 5px;
    color: #2506CE;
    font-family: 'Seymour One', sans-serif;
    color: ${props => props.page == paginationPage ? '#FFF100' : '#2506CE' }
    `
    
    const pages = Math.ceil(allProjects.length / 5)
    let paginationItems = []
    for(let i = 1; i <= pages; i++) {
      paginationItems.push(
        <StyledPaginationItm href="#" onClick={this.handleClick} key={i} page={i}>{i}</StyledPaginationItm>
      )
    }

    return (
      <div>
        <div>{paginationItems}</div>   
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paginationPage: state.paginationPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (page) => dispatch(selectPage(page))
  }
}

const Pagination = connect(mapStateToProps, mapDispatchToProps)(PaginationPages)
export default Pagination
