import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import Step4Message from "./Step4Message";
import LogoWom from "../images/logowom.svg";
import Track from "../images/track.svg";

const HeaderWom = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d1441;
  padding: 28px 15px 10px;
  @media (max-width: 480px) {
    padding: 28px 0 10px;
  }
  .logowom {
    display: block;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleSection = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  margin: 28px 0 5px;
  text-align: center;
`;

const SubTitleSection = styled.h3`
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 0 25px;
  text-align: center;
`;
const BajadaInfo = styled.h3`
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin: 0 0 25px;
  text-align: center;
  .contact-tel{
    color:#ffffff;
  }
`;

const Steps = styled.div`
  width: 100%;
  max-width: 160px;
  min-height: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .tracks {
    width: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9;
  }
  .step {
    text-decoration: none;
    pointer-events: none;
    background-color: #2d1441;
    border: 2px solid #7c6c8a;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.174055);
    width: 24px;
    height: 24px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    &.active {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #ffffff;
      p {
        color: #381451;
      }
    }
    &:nth-child(2) {
      left: 0;
      right: auto;
    }
    &:nth-child(4) {
      left: auto;
      right: right;
    }
    p {
      color: #ffffff;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;


const Header = () => {
  const { formData } = useContext(FormContext);
  return (
    <HeaderWom>
      <Wrapper>
        <img className="logowom" src={LogoWom} alt="wom header" />
        {formData.successFlow === false && (
          <>
            {
              (
                formData.selectedPlan === undefined ||
                formData.selectedPlan !== 'linea-adicional-25dcto' ||
                formData.selectedPlan !== 'linea-adicional-50dcto' ||
                formData.selectedPlan !== 'linea-adicional-75dcto' ||
                formData.selectedPlan !== 'linea-adicional-100dcto' ||
                formData.selectedPlan !== 'linea-adicional-125dcto' ||
                formData.selectedPlan !== 'llinea-adicional-libredcto'
              )
              && <TitleSection></TitleSection>
            }
            {formData.selectedPlan === 'linea-adicional-25dcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            {formData.selectedPlan === 'linea-adicional-50dcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            {formData.selectedPlan === 'linea-adicional-75dcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            {formData.selectedPlan === 'linea-adicional-100dcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            {formData.selectedPlan === 'linea-adicional-125dcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            {formData.selectedPlan === 'linea-adicional-libredcto' && <TitleSection>¡Nadie te da más!</TitleSection>}
            
            
            {formData.selectedPlan === undefined && <SubTitleSection></SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-25dcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-50dcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-75dcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-100dcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-125dcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}
            {formData.selectedPlan === 'linea-adicional-libredcto' && <SubTitleSection>Porta un plan adicional GRATIS por 1 año</SubTitleSection>}

            {formData.selectedPlan === undefined && <BajadaInfo></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-25dcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-50dcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-75dcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-100dcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-125dcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
            {formData.selectedPlan === 'linea-adicional-libredcto' && <BajadaInfo>Si quieres contratar otro plan llámanos al <a className="contact-tel" href="tel:6002001000">600 200 1000</a></BajadaInfo>}
          </>
        )}
        {formData.successFlow === false ? (

          (
            formData.selectedPlan === 'linea-adicional-25dcto' ||
            formData.selectedPlan === 'linea-adicional-50dcto' ||
            formData.selectedPlan === 'linea-adicional-75dcto' ||
            formData.selectedPlan === 'linea-adicional-100dcto' ||
            formData.selectedPlan === 'linea-adicional-125dcto' ||
            formData.selectedPlan === 'linea-adicional-libredcto'
          )  
          ?
          formData.originPlanType === "plan" ? 
          (<Steps>
            <picture className="tracks">
              <img src={Track} alt="track" />
              <img src={Track} alt="track" />
            </picture>
            <NavLink
              exact
              to="/"
              activeClassName="step active"
              className="step"
            >
              <p>1</p>
            </NavLink>
            <NavLink to="/paso2" activeClassName="step active" className="step">
              <p>2</p>
            </NavLink>
            <NavLink to="/paso3" activeClassName="step active" className="step">
              <p>3</p>
            </NavLink>
          </Steps>
          ):(
            null
          )
          :
          undefined
        ) : (
          <Step4Message />
        )}
      </Wrapper>
    </HeaderWom>
  );
};

export default Header;
