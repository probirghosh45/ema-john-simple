import React from "react";
import Cart from "../Cart/Cart";
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
  // const {name,img}=props.product; //here I destructured it
  const { product: { name, img,seller,price } } = props; //nested destructuring
  return (
    <div>
      <div className="shopping">
        <div className="product__section">
          {/* <h1>This is Product</h1> */}
          <img src={img} alt="" />
          <h1 className="align-middle text-primary">{name}</h1>
          {/* <span>by:{seller}</span> */}
          {/* <span>${price}</span> */}
        </div>
        <div className="cart__section">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Product;
