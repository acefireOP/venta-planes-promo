import React, { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanArrow from "../images/arrow_2.svg";
import Plan25gb50dcto from "../images/planes/plan-25-gigas.png";
import Plan50gb50dcto from "../images/planes/plan-50-gigas.png";
import Plan75gb50dcto from "../images/planes/plan-75-gigas.png";
import Plan100gb50dcto from "../images/planes/plan-100-gigas.png";
import Plan125gb50dcto from "../images/planes/plan-125-gigas.png";
import PlanLibre50dcto from "../images/planes/plan-minutos-libres.png";

const RequestContainerMob = styled(motion.div)`
  width: 96%;
  margin: 20px auto 0;
  .request-heading {
    height: 44px;
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
      transition: transform 0.3s;
      transform: rotate(0deg);
      &.active {
        transform: rotate(180deg);
      }
    }
  }
  .allRadius {
    border-radius: 8px;
  }
  .request-plan {
    background-color: #ffffff;
    border-radius: 0px 0px 8px 8px;
    pointer-events: none;
    .container-imgplan {
      padding: 20px;
      img {
        display: block;
        margin: 0 auto;
        box-shadow: 0px 6px 12px rgba(56, 20, 81, 0.15);
        border-radius: 8px;
      }
      &.imgplan-custom{
        img{
          border-radius: 0;
        }
      }
    }
  }
`;

const RequestPlanMob = () => {
  const { formData } = useContext(FormContext);
  const [open, setOpen] = useState(true);

  const variantsOpen = {
    open: {
      maxHeight: 500,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    close: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <RequestContainerMob>
      <div
        className={!open ? "allRadius request-heading" : "request-heading"}
        onClick={() => setOpen(!open)}
      >
        <p>estás solicitando...</p>
        <img className={open ? "active" : ""} src={PlanArrow} alt="arrow" />
      </div>
      <motion.div
        className="request-plan"
        variants={variantsOpen}
        initial="close"
        animate={open ? "open" : "close"}
      >
        {          
          <div className="container-imgplan imgplan-custom">
            {formData.selectedPlan === "25gb-50dcto" && (  <img src={Plan25gb50dcto} alt="plan promo 25gb 50% dcto" />)}
            {formData.selectedPlan === "50gb-50dcto" && ( <img src={Plan50gb50dcto} alt="plan promo 50gb 50% dcto" />)}
            {formData.selectedPlan === "75gb-50dcto" && (  <img src={Plan75gb50dcto} alt="plan promo 75gb 50% dcto" />)}
            {formData.selectedPlan === "100gb-50dcto" && ( <img src={Plan100gb50dcto} alt="plan promo 100gb 50% dctoe" />)}
            {formData.selectedPlan === "125gb-50dcto" && ( <img src={Plan125gb50dcto} alt="plan promo 125gb 50% dctoe" />)}
            {formData.selectedPlan === "libre-50dcto" && ( <img src={PlanLibre50dcto} alt="plan promo minutos libres 50% dcto" />)}
          </div> 
        }
        
      </motion.div>
    </RequestContainerMob>
  );
};

export default RequestPlanMob;
