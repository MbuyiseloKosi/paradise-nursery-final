import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './store/CartSlice'; // Adjust path if your folder structure is different
import { Link } from 'react-router-dom';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }} />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  
                  <button 
                    className="cart-item-delete" 
                    onClick={() => handleDelete(item.id)}
                    style={{ marginLeft: '20px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', borderTop: '2px solid #333', paddingTop: '20px' }}>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <button onClick={handleCheckout} style={{ marginRight: '10px', padding: '10px 20px' }}>Checkout</button>
            <Link to="/plants">
              <button style={{ padding: '10px 20px' }}>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;