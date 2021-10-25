import React, { Component } from "react";

class R033_ReturnMap extends Component {
    state = {
        element_Array: [<li>react</li>
            , <li>200</li>
            , <li>Array map</li>]
    }

    renderMap = () => {
        const { element_Array } = this.state
        return (
            <>
                <ul style={{ textAlign: "left" }}>
                    {element_Array.map((array_val) => array_val)}
                </ul>
                <ul style={{ textAlign: "left" }}>
                    {element_Array.map((array_val) => array_val)}
                </ul>
            </>
        )
    }

    render() {
        return ( // <ul> 태그 안쪽에 element_Array 배열에 있는 element들을 순서대로 꺼내 출력
            <>
                {this.renderMap()}
            </>
        )
    }
}

export default R033_ReturnMap