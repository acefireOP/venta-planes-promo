import React, { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanArrow from "../images/arrow_2.svg";
import Plan100gb50dcto from "../images/planes/plan-60-gigas.svg";
import Plan200gb50dcto from "../images/planes/plan-120-gigas.svg";
import Plan300gb50dcto from "../images/planes/plan-180-gigas.svg";
import Plan400gb50dcto from "../images/planes/plan-240-gigas.svg";
import Plan500gb50dcto from "../images/planes/plan-300-gigas.svg";
import PlanLibre50dcto from "../images/planes/plan-gigas-libres.svg";

const RequestContainer = styled(motion.div)`
  position: absolute;
  top: 200px;
  right: 0;
  z-index: 9;
  .request-heading {
    width: 230px;
    position: absolute;
    top: -1px;
    transform: rotate(-90deg);
    right: auto;
    bottom: 0;
    left: -134px;
    margin: auto;
    height: 37px;
    background-color: #76489b;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
      color: #ffffff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }
    img {
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .request-plan {
    box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
    border-radius: 8px;
    background-color: #ffffff;
    display: flex;
    &.plan-custom{
      border-radius: 0;
      background-color: transparent;
    }
    &.plan-custom-portate{
      border-radius: 0;
      background-color: transparent;
      border-radius: 8px 8px 0 0;
    }
  }
`;

const RequestPlan = () => {
  const { formData } = useContext(FormContext);
  const [open, setOpen] = useState(true);

  const variantsOpen = {
    open: {
      transform: "translateX(0%)",
      transition: { duration: 0.3 },
    },
    close: {
      transform: "translateX(100%)",
      transition: { duration: 0.3 },
    },
  };
  // if(window.location.pathname!=='/'){
  //   return(
  //       <div></div>
  //   )
  // }

  if (formData.selectedPlan !== undefined) {
    return (
      <RequestContainer
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        <div className="request-heading" onClick={() => setOpen(!open)}>
          <p>estás solicitando...</p>
          <img className={!open ? "active" : ""} src={PlanArrow} alt="arrow" />
        </div>
        {

        
          <div className="request-plan plan-custom">
            {formData.selectedPlan === "100gb-50dcto" && (  <img src={Plan100gb50dcto} alt="plan promo 100gb 50% dcto" />)}
            {formData.selectedPlan === "200gb-50dcto" && ( <img src={Plan200gb50dcto} alt="plan promo 200gb 50% dcto" />)}
            {formData.selectedPlan === "300gb-50dcto" && (  <img src={Plan300gb50dcto} alt="plan promo 300gb 50% dcto" />)}
            {formData.selectedPlan === "400gb-50dcto" && ( <img src={Plan400gb50dcto} alt="plan promo 400gb 50% dcto" />)}
            {formData.selectedPlan === "500gb-50dcto" && ( <img src={Plan500gb50dcto} alt="plan promo 500gb 50% dcto" />)}
            {formData.selectedPlan === "libre-50dcto" && ( <img src={PlanLibre50dcto} alt="plan promo minutos libres 50% dcto" />)}
          </div>
        }
      </RequestContainer>
    );
  } else {
    return <div></div>;
  }
};

export default RequestPlan;
