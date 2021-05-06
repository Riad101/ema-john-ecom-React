import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
import { Link } from 'react-router-dom';


const product = (props) => {
    const {img,name,seller,price,stock, key} = props.product;
    return (
        <div className="product-area">
            <div>
                <img src={img} alt=""/>

            </div>

            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link> </h3>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in the stock - Order Soon!</small></p>
                {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className="add-button">
                    <FontAwesomeIcon icon={faShoppingCart}/> Add to cart
                </button>}

            </div>
        </div>
    );
};

export default product;