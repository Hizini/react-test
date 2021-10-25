import React, { Component } from "react";

class R032_Fragments extends Component {

    render() {
        return ( // <React.Fragment> </React.Fragment> 태그를 사용하지 않았다면 <P></P> 태그와 <span></span> 태그가 하나의 태그로 감싸져 있지 않기 때문에 에러 발생
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
        )
    }
}

export default R032_Fragments