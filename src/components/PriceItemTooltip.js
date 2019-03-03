import React, { Component } from "react";
import Tooltip from "./Tooltip";
import { connect } from 'react-redux'

class PriceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTooltip: true
    };
  }

  toggleTooltip() {
    this.setState({ toggleTooltip: !this.state.toggleTooltip });
  }

  render() {
    let tooltip = null;

    if (this.state.toggleTooltip) {
      tooltip = null;
    } else {
      tooltip = <Tooltip desc={this.props.tooltipText} />;
    }

    return (
      <li>
        <div
          className="pickupLink tooltip"
          onMouseOver={() => this.toggleTooltip()}
          onMouseOut={() => this.toggleTooltip()}
        >
          {this.props.desc} {tooltip}
        </div>

        <div className="pickupSavings">${this.props.amount}</div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tooltipText: state.tooltipText
  }
}

export default connect(mapStateToProps)(PriceItem);
