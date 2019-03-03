import axios from "axios";


export const setPricingData = (pricingData) => {
    return {
        type: 'SET_PRICING_DATA',
        pricingData: pricingData
    }
}

export const initPricing = () => {
    
    return dispatch => {
        axios
        .get("https://codechallenge-eaad0.firebaseio.com/PricingData.json")
        .then(response => {
          console.log(response.data);
          dispatch(setPricingData(response.data));
        })
        .catch(error => {
            alert('Path Not Found' + error)
        });      
    }
}

export default initPricing;
