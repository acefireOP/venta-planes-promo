import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import styled from 'styled-components'
import { motion } from "framer-motion";
import GroupPhone from '../images/group-phone.svg'
import IcoClose from '../images/ico_close_modal.svg'

const ModalC2cContainer = styled(motion.div)`
  background: rgba(56,20,81,.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 15px 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px){
    padding: 0;
  }
  .modal-body{
    width: 95%;
    max-width: 398px;
    min-height: 440px;
    background: #FFFFFF;
    border-radius: 8px;
    position: relative;
    padding: 10px;
    @media(max-width: 768px){
      width: 100%;
      border-radius: 0;
      padding: 40px 20px;
      min-height: auto;
      overflow-y: scroll;
      height: 100%;
      max-height: 100%;
    }
    @media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) and (min-device-height: 320px) and (max-device-height: 800px) {
      overflow-y: scroll;
      height: 600px;
      min-height: auto;
    }
    .modal-button{
      width: 100%;
      max-width: 296px;
      border: 0;
      display: block;
      margin: 0 auto;
      margin-top: 30px;
      padding: 14px 20px;
      background-color: #E92070;
      border-radius: 8px;
      color: #ffffff;
      font-weight: bold;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color .3s;
      @media only screen and (min-device-width: 1280px) and (max-device-width: 1366px) and (min-device-height: 720px) and (max-device-height: 800px) {
        margin-top: 20px;
      }
      &:hover{
        background-color: #b71a59;
      }
      &.disabled{
        background-color: rgba(233, 32, 112, .2);
        pointer-events: none;
      }
    }
    .close-modal{
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      transition: transform .3s;
      z-index: 99;
      &:hover{
        transform: scale(1.1)
      }
    }
  }
`
const IframeC2c = styled.iframe`
  width: 100%;
  height: 100%;
  border:0;
  padding:0;
  margin:0;
  position:relative;
  z-index:9;
  min-height: inherit;
`;

const variantsModalC2c = {
  visible: {
    opacity: 1,
    display: "flex",
  },
  hidden: {
    opacity: 0,
    transition: { duration: .3 },
    transitionEnd: {
      display: "none",
    },
  },
}


const ModalC2c = ({isOpenC2c, setIsOpenC2c}) => {
  const { formData, setFormData } = useContext(FormContext);
  return (
    <ModalC2cContainer
      variants={variantsModalC2c}
      initial="hidden"
      animate={isOpenC2c ? "visible" : "hidden"}
    >
      <div className="modal-body">
        <img 
          className="close-modal" 
          src={IcoClose} alt="close"
          onClick={() => setIsOpenC2c(!isOpenC2c)}
        />
        <IframeC2c src={`https://www.wom.cl/_formularios/_formulario-c2c-linea-adicional/?plan=${formData.selectedPlan}&o=prepago`}></IframeC2c>
        {/*<button 
          className="modal-button"
          onClick={() => setIsOpenC2c(!isOpenC2c)}  
        >aceptar</button>*/}
      </div>
    </ModalC2cContainer>
  )
}

export default ModalC2c