import React, { useState, useEffect } from 'react'

function Pagination (props) {

  const { allProjects, getPaginationChunck } = props
  const pages = Math.ceil(allProjects.length / 3)
  let paginationItems = []

  const handleClick = (e) => {
    e.preventDefault()
    const itm = e.target.innerHTML
    getPaginationChunck(itm)
  }

  for(let i = 1; i <= pages; i++) {
    paginationItems.push(
      <a href="#" onClick={handleClick} key={i}> {i} </a>
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

export default Pagination
