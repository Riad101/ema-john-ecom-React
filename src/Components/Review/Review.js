
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const[cart, setCart] = useState([]);
    const[orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceProduct = ()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

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

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
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
                {thankYou}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceProduct} className="add-button"> Place Order </button>

            </div>            
           
        </div>
    );
};

export default Review;