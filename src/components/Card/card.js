import React from 'react';
import './card.css';

const card = (props) => {
   let card=props.card;
   
   const total = card.reduce((total,product)=>total+product.price,0)

   let shipping = 0;
   if (total> 100) {
       shipping=0
   }
   else if(total>15) {
       shipping=4.99;
   }
   else if(total>0){
       shipping=10;
   }

   const tax=(total/ 10)
   const grandTotal=(total + shipping+tax)
   const formemtNumber = num=> {
       const precision= num.toFixed(2)
       return Number(precision)
   }

    return (
        <div>
            <h3>Order sammary</h3>
            <p>Items ordered :  {card.length} </p>
            <p>Product Price : $ {formemtNumber(total)}</p>
            <p>Shipping Cost : $ {formemtNumber(shipping)}</p>
            <p className="tax">Text / VAT : $ {formemtNumber(tax)}</p>
            <p className="total-price">Total Price : $ {formemtNumber(grandTotal)}</p>
            <button className="order-revew">Order Revew</button>
        </div>
    );
};

export default card;