
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const[cart, setCart] = useState([]) 
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    },[]);
    const removeProduct = (productKey) =>{        
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart); 
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd=><ReviewItems 
                        key = {pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItems> )
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
            
           
        </div>
    );
};

export default Review;