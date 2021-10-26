import React, { Component } from "react";

class R072_onSubmit extends Component {

    Submit(e) {
        let inputValue = document.getElementById("inputId").value
        console.log(`inputValue : ${inputValue}`)
        e.preventDefault() //submit 이후 새로고침 방지
    }

    render() {
        return (
            //input 박스에 값을 입력하고 submit 버튼을 누르면 onSubmit 이벤트가 발생하고, Submit 함수가 실행된다.
            <form onSubmit={this.Submit}>
                <input type="text" name="inputName" id="inputId" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default R072_onSubmit