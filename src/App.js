import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import FormContextProvider from "./context/FormContext";
import ValidationContextProvider from "./context/ValidationContext";
import Header from "./components/Header";
import HeaderScene from "./components/HeaderScene";
import Footer from "./components/Footer";
import FooterScene from "./components/FooterScene";
import Steps from "./components/RadiusContentWrapper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import RayoImg from './images/rayo.svg'
import * as firebase from "firebase";
//import ReactGA from "react-ga";

const config = {
  apiKey: "AIzaSyBE4MvxWLMIAApKJTEqT_ZpXHRa3A1kj50",
  authDomain: "wom-venta-de-planes.firebaseapp.com",
  databaseURL: "https://wom-venta-de-planes.firebaseio.com",
  projectId: "wom-venta-de-planes",
  storageBucket: "wom-venta-de-planes.appspot.com",
  messagingSenderId: "343519676009",
  appId: "1:343519676009:web:492dc3db677bd2d93f44f8",
  measurementId: "G-C2L75XKKLB",
};

//ReactGA.initialize("UA-64277072-1");

firebase.initializeApp(config);

const GlobalStyle = createGlobalStyle`
html{
  padding:0px;
  margin:0px;
}
*{
  box-sizing:border-box;
}
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HuinchaTop = styled.div`
  background-color: #ffffff;
  padding: 5px 0;
  article{
    width: 100%;
    max-width: 810px;
    margin-left: auto;
    margin-right: auto;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        font-size: 16px;
        line-height: 18px;
        color: #2D1441;
        text-align: center;
        margin: 0 15px;
        b{
          font-weight: bold;
        }
        br{
          display: block;
          @media(max-width: 640px){
            display: none;
          }
        }
      }
    }
  }
`;

function App() {
  return (
    <FormContextProvider>
      <ValidationContextProvider>
        <Router basename={"/seguro/venta-planes/"}>
          <GlobalStyle />
          <HeaderScene />
          <HuinchaTop>
            <article>
              <div>
                <img src={RayoImg} alt="rayo"></img>
                <p>Pórtate a un plan, con un número desde cualquier compañía.<br></br> <b>Este número debe estar a tu nombre</b></p>
                <img src={RayoImg} alt="rayo"></img>
              </div>
            </article>
          </HuinchaTop>
          <Header />
          <PageWrapper>
            <Switch>
              <Route exact path="/" component={Step1} />
              <Route exact path="/paso2" component={Step2} />
              <Route exact path="/paso3" component={Step3} />
              <Route exact path="/paso4" component={Step4} />
            </Switch>
          </PageWrapper>
          <FooterScene />
          <Footer />
        </Router>
      </ValidationContextProvider>
    </FormContextProvider>
  );
}

export default App;
