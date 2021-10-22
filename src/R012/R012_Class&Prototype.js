import React, { Component } from "react";

class ClassPrototype extends Component {

    //state 초기화
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        //ES5 prototype
        var ExamCountFunc = (function (){
            function ExamCount(num) {
                this.number = num // num 변수의 값 '200'을 number에 저장
            }
            ExamCount.prototype.showNum = function () { // showNum 함수 실행
                console.log('1. react_' + this.number)
            }
            return ExamCount
        }())
        
        var cnt = new ExamCountFunc('200') // ExamCountFunc() 함수의 리턴되는 결과값을 cnt에 저장
        cnt.showNum()

        //ES6 class
        class ExamCountClass {
            constructor(num2) { // num2의 변수값 '2hundred'를 number2에 저장
                this.number2 = num2
            }
            
            //ExamCountClass의 내장함수
            showNum() {
                console.log(`2. react_${this.number2}`)
            }
        }
        
        var cnt2 = new ExamCountClass('2hundred') // ExamCountClass의 객체를 생성한 후 cnt2 값에 저장
        cnt2.showNum()
    }

    render() {
        return (
                <h2>[Class ]</h2>
        )
    }
}

export default ClassPrototype