import React from 'react'
import styled from 'styled-components'

const StyledProjectBlock = styled.div`
height: 100px;
width: 700px;
background: #F6A300;
margin: 20px;
`

export default function ProjectBlock(props) {
  const { projects } = props
  const allProjects = projects.map(itm => <StyledProjectBlock><h2>{itm.project_title}</h2></StyledProjectBlock>)
  return (
    <React.Fragment>
      {
        allProjects
      }
    </React.Fragment>
      
  )
}
