import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import PlanPromo50Dcto from "../images/planes/plan-promo-50dcto.svg";
import PlanPromo15Gb50Dcto from "../images/planes/plan-15gb-50dcto.svg";
import PlanPromo30Gb50Dcto from "../images/planes/plan-promo-30-gigas.svg";
import PlanPromo15GbLineaAdicional from "../images/planes/plan-15gb-linea-adicional.svg";
import PlanPromo20GbLineaAdicional from "../images/planes/plan-20gigas.svg";
import PlanPromo40GbLineaAdicional from "../images/planes/plan-40gigas.svg";
import PlanPromo60GbLineaAdicional from "../images/planes/plan-60gigas.svg";
import PlanPromo80GbLineaAdicional from "../images/planes/plan-80gigas.svg";
import PlanPromo100GbLineaAdicional from "../images/planes/plan-100gigas.svg";
import PlanPromoLibreLineaAdicional from "../images/planes/plan-libre.svg";

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
        {formData.selectedPlan === "promo-50dcto" && (
          <img src={PlanPromo50Dcto} alt="plan Promo 50% dcto" />
        )}
        {formData.selectedPlan === "15gb-50dcto" && (
          <img src={PlanPromo15Gb50Dcto} alt="plan Promo 15gb 50dcto" />
        )}
        {formData.selectedPlan === "30gb-50dcto" && (
          <img src={PlanPromo30Gb50Dcto} alt="plan Promo 30gb 50dcto" />
        )}
        {formData.selectedPlan === "15gb-linea-adicional" && (
          <img src={PlanPromo15GbLineaAdicional} alt="plan Promo 15gb línea adicional" />
        )}
        {formData.selectedPlan === "linea-adicional-20gb" && (
            <img src={PlanPromo20GbLineaAdicional} alt="plan promo 20gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-40gb" && (
            <img src={PlanPromo40GbLineaAdicional} alt="plan promo 40gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-60gb" && (
            <img src={PlanPromo60GbLineaAdicional} alt="plan promo 60gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-80gb" && (
            <img src={PlanPromo80GbLineaAdicional} alt="plan promo 80gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-100gb" && (
            <img src={PlanPromo100GbLineaAdicional} alt="plan promo 100gb línea adicional" />
          )}
          {formData.selectedPlan === "linea-adicional-libre" && (
            <img src={PlanPromoLibreLineaAdicional} alt="plan promo Libre línea adicional" />
          )}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
