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

function App() {
  return (
    <FormContextProvider>
      <ValidationContextProvider>
        <Router basename={"/seguro/venta-planes/"}>
          <GlobalStyle />
          <HeaderScene />
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
