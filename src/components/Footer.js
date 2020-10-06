import React, { useContext } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormContext";
import LogoWom from "../images/logowom.svg";
import Transbank from "../images/transbank.svg";
import IconFacebook from "../images/icon_facebook.svg";
import IconTwitter from "../images/icon_twitter.svg";
import IconYoutube from "../images/icon_youtube.svg";
import IconInstagram from "../images/icon_instagram.svg";
import IconPhoneOne from "../images/ico_phone_one.svg";
import IconPhoneTwo from "../images/ico_phone_two.svg";
import IconWhatsapp from "../images/ico_whatsapp.svg";

const FooterWom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2d1441;
  padding: 28px 15px 50px;
  ul {
    &.w-190{
      width: 190px;
    }
    li {
      font-size: 13px;
      line-height: 16px;
      color: #afa6b7;
      margin-bottom: 10px;
      list-style: none;
      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        padding-bottom: 5px;
        display: block;
      }
      &.social-links {
        width: 100%;
        max-width: 190px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        a {
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      &.li-inline {
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start; */
        align-items: center;
        picture {
          width: 23px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 5px;
        }
        span {
          padding: 0;
        }
      }
    }
  }
  .d-center{
    display: block;
    margin: 0 auto;
    img{
      margin: 0 auto 40px;
      display: block;
    }
  }
  .text-center{
    text-align: center;
  }
`;

const WrapperFooter = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;

    .contract {
      li {
        margin-bottom: 0;
      }
      .one {
        order: 1;
      }
      .two {
        order: 2;
      }
      .three {
        order: 5;
      }
      .four {
        order: 6;
        margin-bottom: 0;
      }
      .five {
        order: 3;
      }
      .six {
        order: 4;
        margin-bottom: 10px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        justify-content: center;
        align-self: center;
        text-align: center;
      }
      .bolder {
        font-weight: bold;
      }
      .li-inline {
        width: 200px;
        height: 40px;
        margin: 9px 0 16px !important;
        border: 1px solid #9a89a4;
        box-sizing: border-box;
        border-radius: 20px;
      }
      .social-links {
        width: 100%;
      }
    }
    div {
      width: 100%;
      max-width: 240px;
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .logo-footer {
      display: blocK;
      margin: 0 auto;
    }
  }
`;

const Footer = () => {
  const { formData } = useContext(FormContext);
  return (
    <FooterWom>
      <WrapperFooter>
        {
          (
            formData.selectedPlan === 'promo-50dcto' ||
            formData.selectedPlan === '30gb-50dcto' ||
            formData.selectedPlan === 'linea-adicional-20gb' ||
            formData.selectedPlan === 'linea-adicional-40gb' ||
            formData.selectedPlan === 'linea-adicional-60gb' ||
            formData.selectedPlan === 'linea-adicional-80gb' ||
            formData.selectedPlan === 'linea-adicional-100gb' ||
            formData.selectedPlan === 'linea-adicional-libre'
          )
          ?
          (
            <>
              <div>
                <img className="logo-footer" src={LogoWom} alt="wom footer" />
              </div>
              <div>
                <ul className="contract">
                  <li className="one">A nuestro WhatsApp:</li>
                  <li className="li-inline two">
                    <picture>
                      <img src={IconWhatsapp} alt="whatsapp" />
                    </picture>
                    <span>+ 56 9 3522 3070</span>
                  </li>
                  <li className="three">
                    {window.innerWidth >= 768
                      ? "Desde tu celular WOM marca:"
                      : "Marca desde tu celular"}
                  </li>
                  <li className="li-inline four">
                    <picture>
                      <img src={IconPhoneOne} alt="desde celular" />
                    </picture>
                    <span>103</span>
                  </li>
                  <li className="five">
                    {window.innerWidth >= 768
                      ? "Fono clientes:"
                      : "Pórtate llamando al"}
                  </li>
                  <li className="li-inline six">
                    <picture>
                      <img src={IconPhoneTwo} alt="fono clientes" />
                    </picture>
                    <span>22 3377 600</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="bolder">Paga con:</li>
                  <li>
                    <img src={Transbank} alt="tarjetas transbank" />
                  </li>
                  <li className="bolder">Síguenos en:</li>
                  <li className="social-links">
                    <a
                      href="https://facebook.com/womchile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={IconFacebook} alt="facebook" />
                    </a>
                    <a
                      href="https://twitter.com/womchile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={IconTwitter} alt="twitter" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCPM0XXrP4i724aYt27QLBxA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={IconYoutube} alt="youtube" />
                    </a>
                    <a
                      href="https://instagram.com/womchile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={IconInstagram} alt="instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
          :
          (
            <div className="d-center">
              <img className="logo-footer" src={LogoWom} alt="wom footer" />
              <ul className="w-190">
                <li className="bolder text-center">Síguenos en:</li>
                <li className="social-links">
                  <a
                    href="https://facebook.com/womchile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IconFacebook} alt="facebook" />
                  </a>
                  <a
                    href="https://twitter.com/womchile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IconTwitter} alt="twitter" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCPM0XXrP4i724aYt27QLBxA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IconYoutube} alt="youtube" />
                  </a>
                  <a
                    href="https://instagram.com/womchile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={IconInstagram} alt="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          )
        }
      </WrapperFooter>
    </FooterWom>
  );
};

export default Footer;
