import React, { useState, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanArrow from "../images/arrow_2.svg";
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

const RequestContainerMob = styled(motion.div)`
  width: 96%;
  margin-bottom: 8px;
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
          formData.selectedPlan === 'linea-adicional-25dcto' ||
          formData.selectedPlan === 'linea-adicional-50dcto' ||
          formData.selectedPlan === 'linea-adicional-75dcto' ||
          formData.selectedPlan === 'linea-adicional-100dcto' ||
          formData.selectedPlan === 'linea-adicional-125dcto' ||
          formData.selectedPlan === 'linea-adicional-libredcto' ||
          formData.selectedPlan === 'linea-adicional-25dcto-nc' ||
          formData.selectedPlan === 'linea-adicional-50dcto-nc' ||
          formData.selectedPlan === 'linea-adicional-75dcto-nc' ||
          formData.selectedPlan === 'linea-adicional-100dcto-nc' ||
          formData.selectedPlan === 'linea-adicional-125dcto-nc' ||
          formData.selectedPlan === 'linea-adicional-libredcto-nc'
          ?
          <div className="container-imgplan imgplan-custom">
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
          :
          <div className="container-imgplan">
            {formData.selectedPlan === undefined && (
              <img src={PlanPromo50Dcto} alt="plan promo 50% dcto" />
            )}
            {formData.selectedPlan === "promo-50dcto" && (
              <img src={PlanPromo50Dcto} alt="plan promo 50% dcto" />
            )}
            {formData.selectedPlan === "30gb-50dcto" && (
              <img src={PlanPromo30Gb50Dcto} alt="plan promo 30gb 50dcto" />
            )}
          </div> 
        }
        
      </motion.div>
    </RequestContainerMob>
  );
};

export default RequestPlanMob;
