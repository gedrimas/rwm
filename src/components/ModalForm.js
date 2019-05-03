import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Form from './Form'
import { formEdititng, formShow } from '../actions' 

const LayerTest = styled.div`
height: 100%;
width: 100%;
z-index: 100;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`

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
z-index: 200;
`
const StyledCancel = styled.div`
width: 32px;
height:32px;
background-image:url('./src/accessories/icons/cancel32.png');
margin-right: 35px;
:hover {
  cursor: pointer;
  
`

class Modal extends Component {

  cancel = () => {
    const {formEdititng, formShow, isEdit} = this.props
    if(isEdit) {
      formEdititng(true)
    }
    formShow(true)
  }

  render() {
    return (
      <LayerTest>
        <ModalWindow >
          <StyledCancel onClick={this.cancel}/>
          <Form/>
        </ModalWindow>
      </LayerTest>
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formEdititng: (edit) => dispatch(formEdititng(edit)),
    formShow: (show) => dispatch(formShow(show))
  }
}

const ModalForm = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ModalForm