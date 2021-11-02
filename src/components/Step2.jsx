import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FormContext } from "../context/FormContext";
import PickupStore from "./PickupStore";
import ChooseReceiptType from "./ChooseReceiptType";

const Step2 = () => {
  const { formData } = useContext(FormContext);
  const [regioneComunasList, setRegioneComunasList] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://1701336841.rsc.cdn77.org/json/regiones-comunas-elockers-matrix.json"
      )
      .then((res) => {
        setRegioneComunasList(res.data);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [formData.storeInfo]);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event':'VirtualPageviewGeneral',
      'virtualPageURL':`promo-50dcto-linea-adicional/${formData.originPlanType}/solicitud-en-linea/paso2`,
      'virtualPageTitle':`Promo 50% Línea Adicional - ${formData.originPlanType} -  Solicitud en Línea - Paso 2`,
    });
  },[])

  return (
    <>
      {Object.keys(formData.storeInfo).length === 0 ? (
        <ChooseReceiptType regioneComunasList={regioneComunasList} />
      ) : (
        <PickupStore store={formData.storeInfo} />
      )}
    </>
  );
};
export default Step2;
