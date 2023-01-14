import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
    return (
        <div>
            <h2>Your Cart</h2>
            <div className='cartWrapper'>
                {
                    products.map(product => (
                        <div key={product.id} className="product">
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <h4>{product.price}</h4>
                            <button className='addBtn' onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cart
