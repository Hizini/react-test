import React, { Component } from "react";

class R068_onMouseMove extends Component {

    MouseMove(tag) {
        console.log('MouseMove TAG : ' + tag)
    }

    render() {
        return (
            //div, input, selsect 태그 영역에서 마우스 커서가 움직일 경우 MouseMove 함수 호출
            <>
                <div onMouseMove={e => this.MouseMove("div")}> 
                    <h3>DIV onMouseMove</h3>
                </div>
                <input type="text" onMouseMove={e => this.MouseMove("input")} />
                <select onMouseMove={e => this.MouseMove("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R068_onMouseMove