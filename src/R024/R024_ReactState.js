import React, { Component } from "react";

class R024_ReactState extends Component {

    //state 초기값 설정
    constructor(props) {
        super(props)
        this.state = {
            StateString: this.props.reactString, // 부모 컴포넌트의 props를 StateString으로 받음
            StateNumber: 200,
        }
    }

    render() {
        return (
            <div style={{ padding: "0px" }}>
                <h2>
                    {this.state.StateString}{this.state.StateNumber}
                </h2>
            </div>
        )
    }
}

export default R024_ReactState