import React, { Component } from "react";
import { connect } from "react-redux";
import PriceItem from "../components/PriceItem";
import PriceItemTooltip from "../components/PriceItemTooltip";
import ItemDetails from "./ItemDetails";
import initPricing from "../actions/action";

class PricingDetails extends Component {
  componentWillMount() {
    this.props.onInitPricingDetails();
  }

  render() {
    return (
      <div className="pricingBox">
        <ul className="pricingDetails">
          <PriceItem desc="Subtotal" amount={this.props.pricing.subtotal} />
          <PriceItemTooltip
            desc="Pickup Savings"
            amount={this.props.pricing.savings}
          />
          <PriceItem
            desc="Est. tax & fees based on"
            amount={this.props.pricing.tax}
            zip={this.props.pricing.zip}
          />
          <hr />
          <PriceItem
            desc="Est. Total"
            amount={this.props.pricing.total}
            totalAmt={true}
          />
        </ul>

        <ItemDetails
          msg1="Show item details"
          msg2="Hide item details"
          type="productDetails"
        />
        <hr />
        <ItemDetails
          msg1="Apply Promo Code"
          msg2="Hide Promo Code"
          type="promoCode"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pickupDetails: state.pickDetails,
    pricing: state.pricing,
    itemDetails: state.itemDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPricingDetails: () => dispatch(initPricing())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PricingDetails);
