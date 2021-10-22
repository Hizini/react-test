import React, { Component } from "react";
import datatype from 'prop-types'

class R020_PropsObjVal extends Component {

    render() {
        let {
            ObjectJson
        } = this.props //props 값 변수에 할당
        return (
            <div style={{ padding: "0px" }}><h2>
                {JSON.stringify(ObjectJson)}
            </h2>
            </div>
        )
    }
}

// shape를 사용해 내부 key 값에 대한 자료형 선언
R020_PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal