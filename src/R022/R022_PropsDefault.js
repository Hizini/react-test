import React, { Component } from "react";

class R022_PropsDefault extends Component {

    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props //props 값 변수에 할당

        return (
            <div style={{ padding: "0px" }}><h2>
                {ReactString}{ReactNumber}
            </h2>
            </div>
        )
    }
}

// ReactString, ReactNumber 기본값 지정
R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400 //무시 (상위 컴포넌트 값으로 출력)
}


export default R022_PropsDefault