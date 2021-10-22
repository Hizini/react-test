import React, { Component } from "react";

class R019_PropsBoolean extends Component {

    render() {
        let {
            BooleanTrueFalse
        } = this.props //props 값 변수에 할당
        return ( // BooleanTruFalse 변수가 true이면 2, falseaus 1을 화면에 출력하고 값이 없을 경우 기본값 true 출력, toString() 함수를 사용해 문자열로 변환
            <div style={{ padding: "0px" }}><h2>
                {BooleanTrueFalse ? '2.' : '1.'}
                {BooleanTrueFalse.toString()}
            </h2>
            </div>
        )
    }
}

export default R019_PropsBoolean