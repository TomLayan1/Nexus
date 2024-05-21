import { createContext, useEffect, useState } from "react";
import { productsData } from "../Assets/Assets";
import { deliveryOptions } from "../Assets/DeliveryDate";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  // Initialize cart state from localStorage if available, otherwise use an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const addToCart = (id) =>{
    // Check if the product is not in the cart. If it's not, add 1 of the product to the cart
    // else, if the product is in the cart, increase its quantity by one 
    if(!cart[id]) {
      setCart(prevCart => ({...prevCart, [id]: 1}))
    }
    else{
      setCart(prevCart => ({...prevCart, [id]: prevCart[id] + 1}))
    }
  }

  const removeFromCart = (id) => {
    setCart(prevCart => ({...prevCart, [id]: prevCart[id] - 1, deliveryOptionId: '1'}))
  }

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    productsData,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    deliveryOptions
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;