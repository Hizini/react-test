import React, { Component } from "react";

class R010_Variable extends Component {

    // state 초기화
    constructor(props){
        super(props)
        this.state = {};
    }

    componentDidMount() {
        // var은 재할당이 가능하지만 값이 바뀔 우려가 있다.
        var varName = 'react'
        console.log('varName1 : ' + varName)
        var varName = '200' // 'varName' is already defined no-redeclare
        console.log('varName2 : ' + varName)
        
        // let은 재할당이 가능하지만 이미 선언 되었다는 error 메세지가 나온다.
        let letName = 'react'
        console.log('letName1 : ' + letName)
        // let letName = '200'
        // parsing error: Identifier 'letName' has already been declared 
        letName = 'react200'
        console.log('letName2 : ' + letName)

        // const는 재할당이 불가능하다.
        const constName = 'react'
        console.log('constName : ' + constName)
        // const constName = '200'
        // parsing error: Identifier 'constName' has already been declared 
        // constName = 'react200'
        // Uncaught TypeError: Assignment to constant variable.
    }

    render() {
        return (
                <h2>[variable ]</h2>
        )
    }
}

export default R010_Variable