import { GlobalStateContext } from "./GlobalStateContext";
import React from "react";

const GlobalState = (props) => {

    const [data , setData] =  useState[{}];

const DataGlobal= {
    data, 
    setData
};



return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );


  export default GlobalState;
}