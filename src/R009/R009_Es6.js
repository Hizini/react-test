import React, { Component } from "react";

class R009_Es6 extends Component {

    // state 초기화 
    constructor(props){
        super(props)
        this.state = {};
    }
    
    componentDidMount() {
        let jsString1 = '자바스크립트'
        let jsString2 = '입니다 \n다음 줄입니다'
        console.log(jsString1 + ' 문자열' + jsString2 + '~!~!') 
        // 출력 : 
        // 자바스크립트 문자열입니다
        // 다음 줄입니다~!~!

        let Es6String1 = 'Es6'
        let Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열 ${Es6String2} !!
--- 다음줄입니다`)
        // 출력 :
        // Es6 문자열 입니다 !!
        // --- 다음줄입니다

        let LongString = "ES6에 추가된 String 함수들입니다."
        console.log('startsWith : ' + LongString.startsWith("ES6에 추가")) // LongString이 'ES6에 추가' 로 시작되면 true 
        console.log('endsWith : ' + LongString.endsWith("함수들입니다.")) // LongString의 마지막에 '함수들입니다.' 가 포함되어 있으면 true
        console.log('includes : ' + LongString.includes("추가된 String")) // LongString 의 문자열 중 '추가된 String' 이 포함되어 있으면 ture
    
    }

    render() {
        return (
                <h2>[Es6 String ]</h2>
        )
    }
}

export default R009_Es6