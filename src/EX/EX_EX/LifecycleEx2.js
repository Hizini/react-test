import React, { Component } from 'react'


class LifecycleEx2 extends Component {

    // state 값 설정 (count)
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
        }
        console.log('constructor')
    }

    // count가 증가되면 state 값 +1로 변경 
    increaseCount = () => {
        const num = this.state.count
        this.setState({
            count : num + 1
        })
        
        console.log('increaseCount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    //버튼을 누르면 리랜더링
    handleClickBtn = () => {
        this.forceUpdate()

    }

    //랜더링 
    render() {
        console.log('render')
        return (
            // 카운트 숫자, 카운트 증가 버튼, 리렌더링 버튼 리턴
            <div>
            <span>카운트 : {this.state.count}</span>
            <button onClick = {this.increaseCount}>카운트 증가</button>
            <button onClick = {this.handleClickBtn}>refresh</button>
            </div>
        )
    }
}

export default LifecycleEx2