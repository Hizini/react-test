import React, { Component } from "react";

class R067_onChange extends Component {

    change = (e) => {
        let val = e.target.value //이벤트에 target속성을 붙여 value 값을 가져오고 val 변수에 할당
        console.log('param : ' + val)
    }
    render() {
        return (
            // input 박스에 문자를 입력하거나 삭제하면 onChange 이벤트가 발생해 change 함수 호출
            // select 박스의 option이 달라질 때마다 onChange 이벤트가 발생해 change 함수 호출
            <div>
                <input type="text" onChange={this.change} />
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        )
    }
}

export default R067_onChange