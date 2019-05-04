import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPage } from '../actions'

class PaginationPages extends Component {

  handleClick = (e) => {
    const { getPaginationChunck, selectPage } = this.props
    e.preventDefault()
    const itm = e.target.innerHTML
    getPaginationChunck(itm)
    selectPage(itm)
  }

  render() {
    const { allProjects } = this.props
    const pages = Math.ceil(allProjects.length / 5)
    let paginationItems = []
    for(let i = 1; i <= pages; i++) {
      paginationItems.push(
        <a href="#" onClick={this.handleClick} key={i}>{i}</a>
      )
    }

    return (
      <div>
        <h1>pagination</h1>
        <div>{paginationItems}</div>
        <div />      
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPage: (page) => dispatch(selectPage(page))
  }
}

const Pagination = connect(null, mapDispatchToProps)(PaginationPages)
export default Pagination
