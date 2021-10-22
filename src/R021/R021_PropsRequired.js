import React, { Component } from "react";
import datatype from 'prop-types'

class R021_PropsRequired extends Component {

    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props //props 값 변수에 할당
        return (
            <div style={{ padding: "0px" }}>
                <h2>
                    {ReactString}{ReactNumber}
                </h2>
            </div>
        )
    }
}

// ReactString의 props 값을 필수 값으로 지정
R021_PropsRequired.propTypes = {
    ReactString: datatype.isRequired
}


export default R021_PropsRequired