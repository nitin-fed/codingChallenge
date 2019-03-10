const initialState = {
  tooltipText:
    "Picking up your order in the store helps cut costs, and we pass the savings on to you.",
  pickDetails: true,
  pricing: {
    subtotal: 0,
    savings: 0,
    tax: 0,
    total: 0,
    zip: 0
  },
  itemDetails: {
    item_name: "Chair",
    quantity: 1,
    price: 0,
    actualPrice: 100,
    imgURL: "../photos/chair.jpg"
  },
  isPromoCodeApplied: false,
  discountCount: 0
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRICING_DATA":
      return {
        ...state,
        pricing: action.pricingData.pricing,
        itemDetails: action.pricingData.itemDetails
      };

    case "PROMOCODE":
      console.log(action.value +":"+ state.discountCount)
      if (action.value === "DISCOUNT" && state.discountCount < 1) {
        return {
          ...state,
          isPromoCodeApplied: true, 
          discountCount: state.discountCount + 1,
          pricing: {
            ...state.pricing,
            total: state.pricing.total - state.pricing.total * (10 / 100)
          }
        };
      } else if(action.value === "DISCOUNT"){
        return {
          ...state,
          discountCount: state.discountCount + 1
        }
      }
break
    default:
      return {
        ...state
      };
  }
};
