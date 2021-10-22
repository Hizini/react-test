import React, { Component } from "react";

class R023_PropsNode extends Component {

    render() {
        return (
            <div style={{ padding: "0px" }}><h2>
                {this.props.children}
            </h2>
            </div>
        )
    }
}

export default R023_PropsNode