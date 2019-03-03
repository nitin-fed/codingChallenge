import React from "react";
import { connect } from "react-redux";

const ProductDetails = (props) => {

  return (
    <div className="productDetails">
      <div className='imageContainer'><img src={props.itemDetails.imgSrc} width='100px' /></div>
      <div className='details' >
        <p>{props.itemDetails.item_name}</p>
        <div>Qty: {props.itemDetails.quantity}</div>
        <div>${props.itemDetails.price}</div> 
              
        <p className='actualPrice'>${props.itemDetails.actualPrice}</p>
      </div>
     
    </div>
  );
};

const mapStateToProps = state => {
    return {
        itemDetails: state.itemDetails
    };
  };

export default connect(mapStateToProps)(ProductDetails);
