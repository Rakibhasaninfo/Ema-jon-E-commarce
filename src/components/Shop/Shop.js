import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/product';
import Card from '../Card/card';

const Shop = () => {
    const frist10 = fakeData.slice(0,10);
    const [products, ]= useState(frist10);
    const [card,setCard]= useState([]);

       const handelAddProduct= (product)=>{
         
           const newCard=[...card,product]
           setCard(newCard)
       }
    return (
        
        <div className="shop-container">
          <div className="product-container">
           
                {
                    products.map(productData=> <Product handelAddProduct={handelAddProduct} product={productData}></Product> )
                }
            
         </div>
           <div className="card-container">
              <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Shop;