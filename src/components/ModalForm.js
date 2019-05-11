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
border: 5px solid #A1B700;
border-radius: 5px;
width: 300px;
height: 300px;
background-color: #FFF100;
position: absolute;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
z-index: 200;
`
const StyledCancel = styled.div`
width: 24px;
height: 24px;
background-image:url('./src/accessories/icons/close.png');
margin-right: 15px;
align-self: flex-end;
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