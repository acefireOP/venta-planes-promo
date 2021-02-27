import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";

import PlanPromo50Dcto from "../images/planes/plan-promo-50dcto.svg";
import PlanPromo30Gb50Dcto from "../images/planes/plan-promo-30-gigas.svg";
import PlanLineaAdicional25Dcto from "../images/planes/plan-10gb-portate.svg";
import PlanLineaAdicional50Dcto from "../images/planes/plan-20gb-portate.svg";
import PlanLineaAdicional75Dcto from "../images/planes/plan-40gb-portate.svg";
import PlanLineaAdicional100Dcto from "../images/planes/plan-100gb-portate.svg";
import PlanLineaAdicional125Dcto from "../images/planes/plan-60gb-portate.svg";
import PlanLineaAdicionalLibreDcto from "../images/planes/plan-gigas-libres-portate.svg";
import PlanLineaAdicional25DctoNc from "../images/planes/plan-10gb-portate.svg";
import PlanLineaAdicional50DctoNc from "../images/planes/plan-20gb-portate.svg";
import PlanLineaAdicional75DctoNc from "../images/planes/plan-40gb-portate.svg";
import PlanLineaAdicional100DctoNc from "../images/planes/plan-100gb-portate.svg";
import PlanLineaAdicional125DctoNc from "../images/planes/plan-60gb-portate.svg";
import PlanLineaAdicionalLibreDctoNc from "../images/planes/plan-gigas-libres-portate.svg";

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
        {formData.selectedPlan === "promo-50dcto" && ( <img src={PlanPromo50Dcto} alt="plan Promo 50% dcto" />)}
        {formData.selectedPlan === "30gb-50dcto" && ( <img src={PlanPromo30Gb50Dcto} alt="plan Promo 30gb 50dcto" />)}
        {formData.selectedPlan === "linea-adicional-25dcto" && (  <img src={PlanLineaAdicional25Dcto} alt="plan promo línea adicional 25dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-50dcto" && ( <img src={PlanLineaAdicional50Dcto} alt="plan promo línea adicional 50dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-75dcto" && (  <img src={PlanLineaAdicional75Dcto} alt="plan promo línea adicional 75dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-100dcto" && ( <img src={PlanLineaAdicional100Dcto} alt="plan promo línea adicional 100dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-125dcto" && ( <img src={PlanLineaAdicional125Dcto} alt="plan promo línea adicional 125dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-libredcto" && ( <img src={PlanLineaAdicionalLibreDcto} alt="plan promo línea adicional libre dcto cliente" />)}
        {formData.selectedPlan === "linea-adicional-25dcto-nc" && (  <img src={PlanLineaAdicional25DctoNc} alt="plan promo línea adicional 25dcto no cliente" />)}
        {formData.selectedPlan === "linea-adicional-50dcto-nc" && ( <img src={PlanLineaAdicional50DctoNc} alt="plan promo línea adicional 50dcto no cliente" />)}
        {formData.selectedPlan === "linea-adicional-75dcto-nc" && (  <img src={PlanLineaAdicional75DctoNc} alt="plan promo línea adicional 75dcto no cliente" />)}
        {formData.selectedPlan === "linea-adicional-100dcto-nc" && ( <img src={PlanLineaAdicional100DctoNc} alt="plan promo línea adicional 100dcto no cliente" />)}
        {formData.selectedPlan === "linea-adicional-125dcto-nc" && ( <img src={PlanLineaAdicional125DctoNc} alt="plan promo línea adicional 125dcto no cliente" />)}
        {formData.selectedPlan === "linea-adicional-libredcto-nc" && ( <img src={PlanLineaAdicionalLibreDctoNc} alt="plan promo línea adicional libre dcto no cliente" />)}
      </div>
    </PlanRequested>
  );
};

export default Step3Plan;
