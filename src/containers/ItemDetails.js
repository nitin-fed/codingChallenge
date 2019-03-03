import React, { Component } from "react";
import ProductDetails from '../components/ProductDetails'
import PromoCode from '../components/Promocode'

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleProductDetails: false
    };
    this.title = props.msg1 + ' +';
 
  }

  toggleProductDetails() { 
    this.setState({ toggleProductDetails: !this.state.toggleProductDetails });
    if(this.state.toggleProductDetails)  {
        this.title = this.props.msg1 + ' +'
    } else {
        this.title = this.props.msg2 + ' -'; 
    }
  }

  render() {
    let productDetails = null;
    if (this.state.toggleProductDetails) {
        if(this.props.type == 'productDetails') {
            productDetails = <ProductDetails />;
        } else if(this.props.type == 'promoCode') {
            productDetails = <PromoCode />;
        }
      
    }

    return (
      <div>
        <div onClick={() => this.toggleProductDetails()}>{this.title}</div>
        {productDetails}
      </div>
    );
  }
}

export default ItemDetails;
