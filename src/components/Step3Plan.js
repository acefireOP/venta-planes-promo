import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import Plan25gb50dcto from "../images/planes/plan-25-gigas.png";
import Plan50gb50dcto from "../images/planes/plan-50-gigas.png";
import Plan75gb50dcto from "../images/planes/plan-75-gigas.png";
import Plan100gb50dcto from "../images/planes/plan-100-gigas.png";
import Plan125gb50dcto from "../images/planes/plan-125-gigas.png";
import PlanLibre50dcto from "../images/planes/plan-minutos-libres.png";

const PlanRequested = styled.div`
  margin-right: 60px;
  h2 {
    color: #7c6c8a;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      text-align: center;
    }
  }
  img {
    border-radius: 5px;
    box-shadow: 0px 0px 14px rgba(56, 20, 81, 0.25);
  }
  .planImage {
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

const Step3Plan = () => {
  const { formData } = useContext(FormContext);
  return (
    <PlanRequested>
      <h2>Plan Solicitado</h2>
      <div className="planImage">
        {formData.selectedPlan === "25gb-50dcto" && ( <img src={Plan25gb50dcto} alt="plan promo 25gb 50% dcto" />)}
        {formData.selectedPlan === "50gb-50dcto" && ( <img src={Plan50gb50dcto} alt="plan promo 50gb 50% dcto" />)}
        {formData.selectedPlan === "75gb-50dcto" && ( <img src={Plan75gb50dcto} alt="plan promo 75gb 50% dcto" />)}
        {formData.selectedPlan === "100gb-50dcto" && ( <img src={Plan100gb50dcto} alt="plan promo 100gb 50% dcto" />)}
        {formData.selectedPlan === "125gb-50dcto" && ( <img src={Plan125gb50dcto} alt="plan promo 125gb 50% dcto" />)}
        {formData.selectedPlan === "libre-50dcto" && ( <img src={PlanLibre50dcto} alt="plan promo minutos libres 50% dcto" />)}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
