import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import "firebase/firestore";
import { FormContext } from "../context/FormContext";
import CheckboxOn from "../images/checkbox-on.svg";
import document from "../assets/terminos_y_condiciones_wom_marzo_2021.pdf";
//import ReactGA from "react-ga";
import axios from "axios";
const Conditions = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
  .condition-check {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 640px) {
      margin-bottom: 20px;
    }
    input {
      display: none;
      &:checked + label {
        &:after {
          background-color: #e92070;
          background-image: url(${CheckboxOn});
          border-color: #e92070;
          transition: background-color 0.5s, background-image 0.5s,
            border-color 0.5s;
        }
      }
    }
    label {
      padding-left: 40px;
      position: relative;
      color: #7c6c8a;
      text-decoration-line: underline;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      a {
        color: #7c6c8a;
        text-decoration-line: underline;
        text-transform: uppercase;
      }
      @media (max-width: 480px) {
        font-size: 12px;
      }
      &:after {
        content: "";
        height: 30px;
        width: 30px;
        border: 1px solid#FF006F;
        border-radius: 2px;
        background-color: transparent;
        background-position: center center;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: auto;
        margin: auto;
        transition: background-color 0.5s, background-image 0.5s,
          border-color 0.5s;
        @media (max-width: 480px) {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
  .btn-request {
    width: 100%;
    max-width: 300px;
    background-color: #e92070;
    border-radius: 8px;
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    padding: 14px 20px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    transition: background-color 0.3s;
    &:hover {
      background-color: #8e1344;
    }
    &.disabled {
      background-color: #b3a6ba;
      pointer-events: none;
    }
  }
`;
const BajadaInfoBottom = styled.h3`
  font-size: 16px;
  line-height: 20px;
  color: #7c6c8a;
  margin: 20px 0 0;
  text-align: center;
  display: none;
  .contact-tel{
    color: #7c6c8a;
  }
  @media(max-width:768px){
    display: block;
  }
`;

const Step3Conditions = () => {
  const [checked, setChecked] = useState(false);
  const [sending, setSending] = useState(false);
  const { formData } = useContext(FormContext);
  const history = useHistory();
  const handleClick = () => {
    const sendDate = new Date().toUTCString();
    let ventaPlanesRef = firebase.firestore().collection("venta-planes-test");
    setSending(true);

    //ReactGA.set(formData);
    const data = {
      creationDate: sendDate,
      selectedPlan: formData.selectedPlan,
      planType: formData.planType,
      rut: formData.rut,
      ci: formData.ci,
      name: formData.name,
      lastName: formData.lastName,
      phone: "+56" + formData.phone,
      email: formData.email,
      phoneToMigrate: "+56" + formData.phoneToMigrate,
      originPlanType: formData.originPlanType,
      previousCarrier: formData.previousCarrier,
      dispatchRegion: formData.dispatchRegion,
      dispatchComuna: formData.dispatchComuna,
      dispatchAddress:
        formData.dispatchType === "Retiro en tienda"
          ? formData.storeInfo.DIRECCION
          : formData.dispatchAddress,
      dispatchAddressStreet: formData.dispatchAddressStreet,
      dispatchAddressNum: formData.dispatchAddressNum,
      contractRegion: formData.contractRegion,
      contractComuna: formData.contractComuna,
      contractAddressStreet: formData.contractAddressStreet,
      contractAddress: formData.contractAddress,
      contractAddressNum: formData.contractAddressNum,
      dispatchType: formData.dispatchType,
      isProcesed: formData.isProcesed,
      processed: 0,
      pickupStore: formData.storeInfo,
    };
    ventaPlanesRef
      .add(data)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        history.push("/paso4");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const dataLayerFnPassStep4 = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'eventoGeneral',
      'eventCategory': `Promo 50% Línea Adicional - ${formData.originPlanType}`,
      'eventAction': 'Solicitud en Línea',
      'eventLabel': 'Ir a Paso 4'
    });
  }

  return (
    <Conditions>
      <div className="condition-check">
        <input
          type="checkbox"
          id="precio-2"
          value="2"
          onClick={() => setChecked(!checked)}
        />
        <label htmlFor="precio-2">
          <a href={document} target="_blank" rel="noopener noreferrer">
            aceptar términos y condiciones
          </a>
        </label>
      </div>
      <button
        className={checked ? "btn-request" : "btn-request disabled"}
        onClick={() => {
          handleClick();
          dataLayerFnPassStep4();
        }}
      >
        {sending ? "Enviando..." : "Ingresar solicitud"}
      </button>
      <BajadaInfoBottom>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfoBottom>
    </Conditions>
  );
};

export default Step3Conditions;
