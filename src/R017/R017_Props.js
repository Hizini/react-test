import React, { Component } from "react";

class R017_Props extends Component {

    render() {
        let props_value = this.props.props_val // App.js에서 전달받은 props 값을 변수에 저장
        props_value += ' from App.js'
        return (
            <div><h2>{props_value}</h2></div>
        )
    }
}

export default R017_Props