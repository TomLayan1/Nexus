import { createContext, useState } from "react";
import { productsData } from "../Assets/Assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const contextValue = {
    productsData
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;