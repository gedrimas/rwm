import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form'

const ModalWindow = styled.div`
margin-top: 100px;
padding: 40px;
border: outset;
width: 300px;
height: 300px;
background-color: #B9EB00;
position: absolute;
color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`

class ModalForm extends Component {
  render() {
    return (
      <ModalWindow>
        <Form />
      </ModalWindow>
    )
  }  
}

export default ModalForm