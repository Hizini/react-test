import React, { Component } from "react";

class R066_onClick extends Component {

    buttonClick = (param) => {
        if (typeof param !== 'string') param = "Click a" //param 변수가 문자열이 아닐면 Click a 라는 문자열을 출력
        console.log('param : ' + param)
    }
    render() {
        return (
            // button, div, a 태그에 onClick 이벤트 추가 
            <>
                <button onClick={e => this.buttonClick("Click button")}>Click button</button>
                <div onClick={e => this.buttonClick("Click div")}>Click div</div>
                <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}

export default R066_onClick