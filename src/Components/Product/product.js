import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';


const product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product-area">
            <div>
                <img src={img} alt=""/>

            </div>

            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in the stock - Order Soon!</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="add-button"><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>

            </div>
        </div>
    );
};

export default product;