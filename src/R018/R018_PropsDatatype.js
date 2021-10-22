import React, { Component } from "react";
import datatype from 'prop-types'

class R018_PropsDatatype extends Component {

    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function // App.js에서 전달받은 props 데이터를 변수에 저장
        } = this.props
        return (
            <div style={{ padding: "0px" }}><h2>
                <p>StringProps: {String}</p>
                <p>Number: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </h2>
            </div>
        )
    }
}

// props 값의 자료형 선언
R018_PropsDatatype.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDatatype