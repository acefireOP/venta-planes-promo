import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import Plan100gb50dcto from "../images/planes/plan-60-gigas.svg";
import Plan200gb50dcto from "../images/planes/plan-120-gigas.svg";
import Plan300gb50dcto from "../images/planes/plan-180-gigas.svg";
import Plan400gb50dcto from "../images/planes/plan-240-gigas.svg";
import Plan500gb50dcto from "../images/planes/plan-300-gigas.svg";
import PlanLibre50dcto from "../images/planes/plan-gigas-libres.svg";

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
        {formData.selectedPlan === "100gb-50dcto" && ( <img src={Plan100gb50dcto} alt="plan promo 100gb 50% dcto" />)}
        {formData.selectedPlan === "200gb-50dcto" && ( <img src={Plan200gb50dcto} alt="plan promo 200gb 50% dcto" />)}
        {formData.selectedPlan === "300gb-50dcto" && ( <img src={Plan300gb50dcto} alt="plan promo 300gb 50% dcto" />)}
        {formData.selectedPlan === "400gb-50dcto" && ( <img src={Plan400gb50dcto} alt="plan promo 400gb 50% dcto" />)}
        {formData.selectedPlan === "500gb-50dcto" && ( <img src={Plan500gb50dcto} alt="plan promo 500gb 50% dcto" />)}
        {formData.selectedPlan === "libre-50dcto" && ( <img src={PlanLibre50dcto} alt="plan promo minutos libres 50% dcto" />)}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
