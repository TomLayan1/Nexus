import { createContext, useEffect, useState } from "react";
import { product } from "../Assets/Assets";
import { deliveryOptions } from "../Assets/DeliveryDate";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  // Initialize cart state from localStorage if available, otherwise use an empty array
  const [storeCart, setStoreCart] = useState(
    () => {
      const savedCart = localStorage.getItem('storeCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
  );

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('storeCart', JSON.stringify(storeCart));
  }, [storeCart]);

  // Function to add to cart
  const addToCart = (id) => {
    if(storeCart[id]){
      setStoreCart(prevCart => ({...prevCart, [id]: prevCart[id] + 1}))
    }
    else{
      setStoreCart(prevCart => ({...prevCart, [id]: 1}))
    }
  };

  // This function to increases quantity
  const increaseItemQuantity = (id) => {
    setStoreCart(prevCart => {
      // Declare a variable that is equal to the quantity of the id 
      const currentQuantitty = prevCart[id];
      // Check if the quantity is less than 10
      if (currentQuantitty < 10) {
        return {...prevCart, [id]: currentQuantitty + 1}
      }
      // Return the prevCart quantity unchanged if the quantity is 10
      return prevCart
    })
  }

  // This function to reduce quantity
  const reduceItemQuantity = (id) => {
    setStoreCart(prevCart => {
      // Declare a variable that is equal to the quantity of the id
      const currentQuantity = prevCart[id];
      // Check if the quantity is greater than 1
      if (currentQuantity > 1) {
        return {...prevCart, [id]: currentQuantity - 1}
      }
      // Return the prevCart quantity unchanged if the quantity is 1
      return prevCart
    })
  }
  // This function to delete item
  const deleteItem = (id) => {
    setStoreCart(prevCart => {
      // Destructure to exclude the item with the specified ID
      const {[id]: _, ...rest} = prevCart;
      return rest;
    })
  }

  // Function to calculate total quantity of items in the cart
  const getTotalQuantity = () => {
    return Object.values(storeCart).reduce((total, quantity) => total + quantity, 0);
  };

    // state is initialized as an empty object.
  // It will hold the selected delivery option index for each product.
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({});


  // Function for payment summary

  // Function to calculate total amount of items in the cart
  const getCartItemPrice = () => {
    let itemPriceTotal = 0
    for (const item in storeCart) {
      if (storeCart[item] > 0) {
        let itemPriceInfo = product.find(product => product.id === item);
        itemPriceTotal += (itemPriceInfo.priceCents * storeCart[item]) / 100;
      }
    }
    return itemPriceTotal.toFixed(2);
  }


  // Function to calculate total amount of items in the cart
  const getshippingTotalPrice = () => {
    let itemShippingTotal = 0
    for (const item in storeCart) {
      if (storeCart[item] > 0) {
        const shippingOptionIndex = selectedDeliveryOption[item] || 0;
        const deliveryFee = deliveryOptions[shippingOptionIndex].priceCents
        itemShippingTotal += deliveryFee / 100;
      }
    }
    return itemShippingTotal.toFixed(2);
  }

  // Function for total price without shipping
  const priceBeforeShipping = () => {
    const cartPriceTotal = getCartItemPrice();
    const shippingFeeTotal = getshippingTotalPrice();
    const sum = Number(cartPriceTotal) + Number(shippingFeeTotal);
    return sum.toFixed(2)
  }

  // Function to get estimated Tax
  const getEstimatedTax = () => {
    const beforeShipping = priceBeforeShipping();
    const estimatedTax = Number(beforeShipping * 0.1);
    return estimatedTax.toFixed(2)
  }

  // Function to get total price
  const totalPrice = () => {
    const totalBeforeTax = priceBeforeShipping();
    const estimatedTax = getEstimatedTax();
    const total = Number(totalBeforeTax) + Number(estimatedTax);
    return total.toFixed(2)
  }


  const contextValue = {
    product,
    storeCart,
    setStoreCart,
    addToCart,
    increaseItemQuantity,
    reduceItemQuantity,
    deleteItem,
    selectedDeliveryOption,
    setSelectedDeliveryOption,
    deliveryOptions,
    getTotalQuantity,
    getCartItemPrice,
    getshippingTotalPrice,
    priceBeforeShipping,
    getEstimatedTax,
    totalPrice
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;