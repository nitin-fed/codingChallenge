import React, { Component } from "react";
import { connect } from "react-redux";

class Promocode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: null
    };

    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    this.focusTextInput();
  }

  handleApplyDiscount() {
      this.props.promoCodeHandler(this.textInput.value);
      this.textInput.value = ""; 
  }

  render() {
    
    let discountInfo = '';
    if(this.props.isPromoCodeApplied && this.props.discountCount === 1){
      discountInfo = <p>Congratulations! 10% discount applied.</p>
    } else if(this.props.discountCount > 1) {
      discountInfo = <p>Discount already applied.</p>
    }

    return (
      <div>
        <p>Promocode</p>
        <input type="text" ref={this.setTextInputRef} />
        <button
          onClick={() => this.handleApplyDiscount()}
          className="promoButton"
        >
          Apply
        </button>
        {discountInfo}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
    isPromoCodeApplied: state.isPromoCodeApplied,
    discountCount: state.discountCount
  }
}
const mapDispatchToState = dispatch => {
  return {
    promoCodeHandler: val => dispatch({ type: "PROMOCODE", value: val })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(Promocode);
