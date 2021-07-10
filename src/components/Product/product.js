import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
         const {img,name,seller,price,stock} =props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-contant">
                <h4  className="product-name">{name}</h4>
                <br />
                <p><small>By: {seller}</small> </p>
                <p className="product-price">${price}</p>
                <br />
                <p className="stock"><small>Only{stock} left in stock -Oder soon.</small></p>
                <button className="product-btn" onClick={ () => props.handelAddProduct (props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Card</button>
                
            </div>
          
        </div>
    );
};

export default Product;