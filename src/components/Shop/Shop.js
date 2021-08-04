import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
const Shop = () => {
 const product10=fakeData.slice(0,10);
//  console.log(product10)
const [products, setProducts] = useState(product10)

    return (
        <div>
            <h1>This is Shop</h1>
            <ul>
                    {/* {products.length} */}
                    {/* {products.map((productItem)=><li>{productItem.name}</li>)} */}
                    {products.map((productItem)=><Product product={productItem}></Product>)}

                    {/*Data Passing with Props, ekhane "product" [small p] namme parameter[params] "productItem" k pathalam "product page a "props" [props=properties] akare receive korbo"*/}


                    {/* {products.map((productName)=>(productName.name))} */}
                    {/* {products.map((productPrice)=>(productPrice.price))} */}
            </ul>
        </div>
    );
};

export default Shop;