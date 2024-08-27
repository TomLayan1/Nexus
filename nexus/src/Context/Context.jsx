import { createContext, useState, useEffect } from "react";
import { products } from '../Assets/Assets'
import { deliveryOptions } from "../Assets/DeliveryDate";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
 
  // STATE FOR CATEGORY
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // STATE FOR FILTERING THE PRODUCTS TO DISPLAY
  const [filteredProduct, setFilteredProduct] = useState(products)
  
  // STATE FOR DELIVERY OPTION INDEX
  // state is initialized as an empty object.
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState({});
  
  // State to handle notifications
  const [notification, setNotification] = useState(null);
  
  // FUNCTION TO FILTER ITEMS BASED ON CATEGORY
  const handleCategory = (name) => {
    if (name === 'All') {
      setFilteredProduct(products);
    } else {
      const filtered = products.filter(product => 
        product.category.includes(name.toLowerCase())
      )
      setFilteredProduct(filtered);
    }
  }

  useEffect(() => {
    handleCategory(selectedCategory)
  }, [selectedCategory])


  // Auto-hide notification after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setNotification(''), 3000)
    return () => clearTimeout(timer)
  }, [notification])

  // STATE FOR CART
  const [storeCart, setStoreCart] = useState(() => {
    const savedCart = localStorage.getItem('storeCart');
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(()=> {
    localStorage.setItem('storeCart', JSON.stringify(storeCart));
  }, [storeCart])


  // FUNCTION TO ADD PRODUCT TO CART
  const addToCart = (id) => {
    if (storeCart[id]) {
      setStoreCart(prev => ({...prev, [id]: {quantity: prev[id].quantity + 1}}));
      setNotification('Item Added To Cart')
    } else {
      setStoreCart(prev => ({...prev, [id]: {quantity: 1, deliveryOptionIndex: 0}}))
      setNotification('Item Added To Cart')
    }
  }

  // FUNCTION TO REDUCE QUANTITY
  const reduceQuantity = (id) => {
    setStoreCart(prev => {
      // Declare a variable that is equal to the item's id
      const currentProduct = prev[id];
      // Check if the quantity is greater than one
      const newQuantity = currentProduct.quantity > 1 ? currentProduct.quantity - 1 : currentProduct.quantity;
      
      return {...prev, [id]: {...currentProduct, quantity: newQuantity}}
    })
  }

  // FUNCTION TO INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setStoreCart(prev => {
      // Declare a variable that is equal to the item's id
      const currentProduct = prev[id];
      // Check if the quantity is less than 10
      const newQuantity = currentProduct.quantity < 10 ? currentProduct.quantity + 1 : currentProduct.quantity;
      
      return {...prev, [id]: {...currentProduct, quantity: newQuantity}}
    })
  }

  // FUNCTION TO DELETE ITEM FROM CART
  const deleteItem = (id) => {
    setStoreCart(prev => {
      // Destructure to exclude item with the specified id
      const {[id]: _, ...rest} = prev;
      return rest;
    })
    setNotification('Item Removed From Cart')
  }

  // FUNCTION TO SELECT DELIVERY OPTION
  const selectDeliveryOption = (id, optionIndex) => {
    setStoreCart(prev => {
      return ({...prev, [id]: {...prev[id], deliveryOptionIndex: optionIndex}})
    })
  }

  // FUNCTION TO CALCULATE TOTAL QUANTITY OF CART ITEMS
  const getTotalQuantity = () => {
    return Object.values(storeCart).reduce((total, storeCart) => total + storeCart.quantity, 0);
  };

   // PAYMENT SUMMARY
  // Function to calculate total amount of items in the cart
  const getCartItemPrice = () => {
    let itemPriceTotal = 0
    for (const itemId in storeCart) {
      if (storeCart[itemId].quantity > 0) {
        let itemPriceInfo = products.find(product => product.id === itemId);
        itemPriceTotal += (itemPriceInfo.priceCents * storeCart[itemId].quantity) / 100;
      }
    }
    return itemPriceTotal;
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
    return itemShippingTotal;
  };

  // PRICE WITHOUT SHIPPING
  const priceBeforeShipping = () => {
    const totalItemPrice = Number(getCartItemPrice());
    const shippingTotal = Number(getShippingTotalPrice());
    const sum = totalItemPrice + shippingTotal;
    return sum;
  }

  // ESTEMATED TAX
  const estimatedTax = () => {
    const taxNumber = Number(priceBeforeShipping());
    const tax = taxNumber * 0.1
    return tax;
  }

  // TOTAL PRICE
  const totalPrice = () => {
    const tax = estimatedTax();
    const beforeShipping = priceBeforeShipping();
    const totalPrice = Number(tax) + Number(beforeShipping);
    return totalPrice;
  }

  const contextValue = {
    selectedCategory,
    setSelectedCategory,
    storeCart,
    notification,
    setNotification,
    filteredProduct,
    handleCategory,
    addToCart,
    reduceQuantity,
    increaseQuantity,
    deleteItem,
    selectDeliveryOption,
    setSelectedDeliveryOption,
    getTotalQuantity,
    getCartItemPrice,
    getShippingTotalPrice,
    priceBeforeShipping,
    estimatedTax,
    totalPrice
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider