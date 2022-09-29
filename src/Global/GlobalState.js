import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import React from "react";

const GlobalState = (props) => {
  
  const [data , setData] =  useState({});
  const [imageFromEvent , setimageFromEvent] =  useState(null);
  
  const dataGlobal= {
      data, 
      setData,
      imageFromEvent,
      setimageFromEvent
  };



return (
    <GlobalStateContext.Provider value={dataGlobal}>
      {props.children}
    </GlobalStateContext.Provider>
  );


}
export default GlobalState;