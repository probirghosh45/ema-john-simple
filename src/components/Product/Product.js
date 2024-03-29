import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    // console.log(props.product);
  // const {name,img}=props.product; //here I destructured it
//    console.log(props.handleClicked)
  const { product: { name, img,seller,price } } = props; //nested destructuring
  return (
    <div>
      <div className="product">
        <div className="product__image__section">
          {/* <h1>This is Product</h1> */}
          <img src={img} alt="" />
        </div>
        <div className="product__info__section">
        <h1 className="align-middle text-primary">{name}</h1>
          <span>by:{seller}</span> <br />
          <span>${price}</span> <br />
          <button onClick={()=>{props.handleClicked(props.product)}} type="button" class="btn btn-warning"><FontAwesomeIcon className="pe-1" icon={faShoppingCart} />Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
