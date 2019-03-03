import React from 'react'

const PriceItem = (props) => {
    let classname = null;
    if(props.isPickup) {
        console.log('Store pickup available');
    } else{
        console.log('Store pickup NOT available');
    }

    if (props.totalAmt){
        classname = "totalAmount" 
    }

    return (
        <li>
            <div className={classname}>{props.desc} {props.zip}</div>
            <div className={classname}>${props.amount}</div>
        </li>
    )
}

export default PriceItem;