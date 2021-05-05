import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product//product'

const ProductDetails = () => {
    const {productKey} = useParams();

    const product = fakeData.find(pd=> pd.key === productKey);
    return (
        <div>
            <h1>{productKey}Product Details coming soon...</h1>
            <Product product={product}></Product>
        </div>
    );
};

export default ProductDetails;