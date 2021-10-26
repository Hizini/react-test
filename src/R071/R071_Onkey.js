import React, { Component } from "react";

class R071_Onkey extends Component {

    Onkey(event, e) { //evemt는 문자열, e는 이벤트 객체 유형
        let val = e.target.value
        console.log(`event : ${event}, value : ${val}`)
    }

    render() {
        return (
            //onKeyDown : 키를 누르는 동작에 반응한다. 컨트롤, 쉬프트, 알트 등을 키로 인식하며 한/영, 프린트스크린은 인식하지 못한다.
            //onKeyPress : 문자가 실제로 입력됐을 때 반응한다. 컨트롤, 쉬프트, 알트, 한/영, 프린트 스크린 등은 인식하지 못한다.
            //onKeyUp : 키를 눌렀다가 뗴는 동작에 반응한다. 컨트롤, 쉬프트, 알트 등을 키로 인식하며 한/영, 프린트스크린은 인식하지 못한다.
            <div>
                onKeyDown : <input type="text"
                    onKeyDown={e => this.Onkey("onKeyDown", e)} /><br />
                onKeyPress : <input type="text"
                    onKeyPress={e => this.Onkey("onKeyPress", e)} /><br />
                onKeyUp : <input type="text"
                    onKeyUp={e => this.Onkey("onKeyUp", e)} /><br />
            </div>
        )
    }
}

export default R071_Onkey