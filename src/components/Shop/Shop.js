import React, { useState } from 'react';
import fakeData from '../../fakeData'
const Shop = () => {
 const product10=fakeData.slice(0,10);
 console.log(product10)
const [products, setProducts] = useState(product10)

    return (
        <div>
            <h1>This is Shop</h1>
            <ul>
                <li>
                    {/* {products.length} */}
                    {products.map((productItem)=>((productItem.name)))}

                    {products.map((productPrice)=>(productPrice.price))}
                </li>
            </ul>
        </div>
    );
};

export default Shop;