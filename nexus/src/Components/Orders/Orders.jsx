import React, { useContext } from 'react'
import './Orders.css'
import Header from '../Header/Header'
import { StoreContext } from '../../Context/Context'
import { products } from '../../Assets/Assets'

const Orders = () => {
  // From context
  const { shoppingOrders } = useContext(StoreContext);
  
  return (
    <>
      <Header />
      <div id='orders' className='orders-section'>
        <h1 className='order-header'>Orders</h1>
        <div className='order-table-title'>
          <p className='img-table-title'>Image</p>
          <p className='table-title'>Name</p>
          <p className='table-title'>Quantity</p>
          <p className='table-title'>Price</p>
          <p className='table-title'>Delivery</p>
          <p className='table-title'>Status</p>
        </div>
        <hr className='order-hr' />
        {shoppingOrders.length === 0 ? 
          <div>
            <p>No Order. Purchase an Item</p>
          </div>
          :
          <div className='order-items-bx'>
            {shoppingOrders.map(([productId, {quantity, deliveryOptionIndex}]) => {
              const orderedItem = products.find(product => product.id === productId);

              {/* Check for delivery index to determine delivery days */}
              let orderDelivery = '';
              if (deliveryOptionIndex === 0) {
                orderDelivery = 'In 7 days'
              } else if (deliveryOptionIndex === 1) {
                orderDelivery = 'In 3 days'
              } else {
                orderDelivery = 'Tomorrow'
              }

              if (!orderedItem) return null;
              return (
                <div>
                  <div className='order-item-bx' key={orderedItem.id}>
                    <img className='order-img' src={orderedItem.image} />
                    <p className='order-name'>{orderedItem.name}</p>
                    <p className='order-quantity'>{quantity}</p>
                    <p className='order-price'>₦{((orderedItem.priceCents / 100) * quantity).toLocaleString()}</p>
                    <p className='order-delivery'>{orderDelivery}</p>
                    <p className='order-status'>Pending</p>
                  </div>
                  <hr className='order-hr' />
                </div>
              )
            })}
          </div>
        }
      </div>
    </>
  )
}

export default Orders