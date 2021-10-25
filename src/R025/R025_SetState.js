import React, { Component } from "react";

class R025_ReactState extends Component {

    //state 초기값 설정
    constructor(props) {
        super(props)
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) => {
        if (flag === 'direct') this.state.StateString = '리액트' // state를 직접 '리액트'로 변경 => StateString 값은 '리액트'로 변경되지만, rernder 함수 호출이 안되어 화면에는 react로 나타남
        if (flag === 'setstate') this.setState({ StateString: '리액트' }) // setState함수를 사용해 state 값 변경 => render 함수 호출하여 화면에 '리액트'라고 출력됨
    }

    render() {
        return (
            <div style={{ padding: "0px" }}>
                <h2>
                    <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
                    <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button><br />
                    [state 변경하기] StateString : {this.state.StateString}
                </h2>
            </div>
        )
    }
}

export default R025_ReactState