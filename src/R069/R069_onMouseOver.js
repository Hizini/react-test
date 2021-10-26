import React, { Component } from "react";

class R069_onMouseOver extends Component {

    MouseOver(tag) {
        console.log('MouseOver TAG : ' + tag)
    }

    render() {
        return (
            //div, input, selsect 태그 영역에 마우스가 진입할 경우 MouseOver 함수 호출
            <>
                <div onMouseOver={e => this.MouseOver("div")}> 
                    <h3>DIV onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")} />
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R069_onMouseOver