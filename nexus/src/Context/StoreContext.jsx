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

  // state is initialized as an empty object.
  // It will hold the selected delivery option index for each product.
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({});


  // Function to add to cart
  const addToCart = (id) => {
    if(storeCart[id]){
      setStoreCart(prevCart => ({...prevCart, [id]: prevCart.quantity + 1}))
    }
    else{
      setStoreCart(prevCart => ({...prevCart, [id]: { quantity: 1, deliveryOptionIndex: 0 }}))
    }
  };

  // This function to increases quantity
  const increaseItemQuantity = (id) => {
    setStoreCart(prevCart => {
      // Declare a variable that is equal to the quantity of the id
      const currentStoreCart = prevCart[id];
      // Check if the quantity is less than 10
      const newQuantity = currentStoreCart.quantity < 10 ? currentStoreCart.quantity + 1 : currentStoreCart.quantity;
      return { ...prevCart, [id]: { ...currentStoreCart, quantity: newQuantity } };
    })
  }

  // This function to reduce quantity
  const reduceItemQuantity = (id) => {
    setStoreCart(prevCart => {
      // Declare a variable that is equal to the quantity of the id
      const currentStoreCart = prevCart[id];
      // Check if the quantity is greater than 1
      const newQuantity = currentStoreCart.quantity > 1 ? currentStoreCart.quantity - 1: currentStoreCart.quantity;

      return{ ...prevCart, [id]: {...currentStoreCart, quantity: newQuantity} };
    });
  };

  // This function to delete item
  const deleteItem = (id) => {
    setStoreCart(prevCart => {
      // Destructure to exclude the item with the specified ID
      const {[id]: _, ...rest} = prevCart;
      return rest;
    })
  }

  // A function that will handle change when a delivery option is selected
  const handleDeliveryOption = (productId, optionIndex) => {
    setStoreCart(prevCart => ({ ...prevCart,[productId]: {...prevCart[productId], deliveryOptionIndex: optionIndex}}))
  }


  // Function to calculate total quantity of items in the cart
  const getTotalQuantity = () => {
    return Object.values(storeCart).reduce((total, storeCart) => total + storeCart.quantity, 0);
  };

  
  // PAYMENT SUMMARY
  // Function to calculate total amount of items in the cart
  const getCartItemPrice = () => {
    let itemPriceTotal = 0
    for (const itemId in storeCart) {
      if (storeCart[itemId].quantity > 0) {
        let itemPriceInfo = product.find(product => product.id === itemId);
        itemPriceTotal += (itemPriceInfo.priceCents * storeCart[itemId].quantity) / 100;
      }
    }
    return itemPriceTotal.toFixed(2);
  }

  const getShippingTotalPrice = () => {
    let itemShippingTotal = 0;
    for (const itemId in storeCart) {
      const cartItem = storeCart[itemId];
      if (cartItem.quantity > 0) {
        const shippingOptionIndex = selectedDeliveryOption[itemId] !== undefined ? selectedDeliveryOption[itemId] : cartItem.deliveryOptionIndex;
        if (shippingOptionIndex >= 0 && shippingOptionIndex < deliveryOptions.length) {
          const deliveryFee = deliveryOptions[shippingOptionIndex].priceCents;
          itemShippingTotal += deliveryFee / 100;
        } else {
          console.warn(`Invalid shipping option index ${shippingOptionIndex} for item ${itemId}`);
        }
      }
    }
    return itemShippingTotal.toFixed(2);
  };

  // Function for total price without shipping
  const priceBeforeShipping = () => {
    const cartPriceTotal = getCartItemPrice();
    const shippingFeeTotal = getShippingTotalPrice();
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
    handleDeliveryOption,
    getTotalQuantity,
    getCartItemPrice,
    getShippingTotalPrice,
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