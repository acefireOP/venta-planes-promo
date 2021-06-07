import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import Plan50gb50dcto from "../images/planes/plan-50-gigas.png";
import Plan100gb50dcto from "../images/planes/plan-100-gigas.png";
import Plan150gb50dcto from "../images/planes/plan-150-gigas.png";
import Plan200gb50dcto from "../images/planes/plan-200-gigas.png";
import Plan250gb50dcto from "../images/planes/plan-250-gigas.png";
import PlanLibre50dcto from "../images/planes/plan-gigas-libres.png";

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
        {formData.selectedPlan === "50gb-50dcto" && (  <img src={Plan50gb50dcto} alt="plan promo 50gb 50% dcto" />)}
        {formData.selectedPlan === "100gb-50dcto" && ( <img src={Plan100gb50dcto} alt="plan promo 100gb 50% dcto" />)}
        {formData.selectedPlan === "150gb-50dcto" && (  <img src={Plan150gb50dcto} alt="plan promo 150gb 50% dcto" />)}
        {formData.selectedPlan === "200gb-50dcto" && ( <img src={Plan200gb50dcto} alt="plan promo 200gb 50% dcto" />)}
        {formData.selectedPlan === "250gb-50dcto" && ( <img src={Plan250gb50dcto} alt="plan promo 250gb 50% dcto" />)}
        {formData.selectedPlan === "libre-50dcto" && ( <img src={PlanLibre50dcto} alt="plan promo minutos libres 50% dcto" />)}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
