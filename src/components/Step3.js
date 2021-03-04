import React, { Fragment, useEffect, useContext } from "react";
import { FormContext } from "../context/FormContext";
import Step3Plan from "./Step3Plan";
import Step3Info from "./Step3Info";
import styled from "styled-components";
import Step3Conditions from "./Step3Conditions";
import TitleBlock from "./TitleBlock";
//import ReactGA from "react-ga";
import RadiusContentWrapper from "./RadiusContentWrapper";

const WrapperStep3 = styled.div`
  width: 100%;
  max-width: 660px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Step3 = () => {
  const { formData, setFormData } = useContext(FormContext);
  useEffect(() => {
    setFormData({ ...formData, successFlow: false });
    window.scrollTo(0, 0);
    /*ReactGA.pageview(
      window.location.pathname + `/?plan=${formData.selectedPlan}`
    );*/
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event':'pagina-virtual', 
      'virtualPageURL':`/checkout/linea-adicional/paso3/?plan=${formData.selectedPlan}​`, 
      'virtualPageTitle':'Checkout - Linea adicional - Confirmación ', 
      'rut':`${formData.rut}`,
      'tipoPlan':`${formData.planType}`,
      'numeroPortar':`${formData.phoneToMigrate}`
    });
  }, []);
  return (
    <RadiusContentWrapper>
      <TitleBlock titulo="Resumen de tu solicitud" />
      <WrapperStep3>
        <Step3Plan />
        <Step3Info />
      </WrapperStep3>
      <Step3Conditions />
    </RadiusContentWrapper>
  );
};
export default Step3;
