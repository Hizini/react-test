import React, { Component } from 'react'
import Ex2 from './EX_EX/LifecycleEx2';


class LifecycleEx1 extends Component {

    // state 초기화
    constructor(props) {
        super(props)
        this.state = {
            name : "" 
            
        }
    }

    // 함수 changeText가 이벤트 발생 시 발생 된 타겟의 name으로 state 변경 
    changeText = (event) => {
        this.setState({
            name: event.target.name
        })
    }
    
    // 문자열 배열을 순회하며 그 값을 이름으로 갖는 button을 만들고 버튼 클릭 시 changeText 호출
    renderBtn = () => {
        const arr = ['봄', '여름', '가을', '겨울']
        return (<>
            {arr.map((name) => (<button onClick={this.changeText} name={name}>{name}</button>)) }
        </>)
    }


    render() {
        const { name } = this.state // {this.state.name}변수 선언
        // const nameList = arr.map((name, index) => (<button key={index}>{name}</button>))

        // 클릭하는 버튼의 이름을 출력, state 값을 자식 컴포넌트에 porps로 전달 
        return (
            <>
            <div>
                <div>{name}</div>
                {this.renderBtn()}
            </div>
            <div>
            <Ex2 props_value={name}>{name}</Ex2>
            </div>
            </>
        )
    }
}

export default LifecycleEx1