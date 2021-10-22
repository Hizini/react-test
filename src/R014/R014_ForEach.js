import React, { Component } from "react";

class R014_ForEach extends Component {

    componentDidMount() {
        var For_Arr = [3, 2, 8, 8]
        var For_newArr = []

        for (var i = 0; i < For_Arr.length; i++) { // i는 0부터 For_Arr의 길이까지 1씩 증가하면서
            For_newArr.push(For_Arr[i]) // For_newArr에 For_Arr[i] 순서로 push
        }
        console.log(`1. For_newArr : [${For_newArr}]`)

        var ForEach_Arr = [3, 3, 9, 8]
        var ForEach_newArr = []
        // ForEach_Arr의 배열 값을 순회하며 ForEach_newArr
        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result)
        })
        console.log(`2. ForEach_newArr : [${ForEach_newArr}]`)
        }

    render() {
        return (
                <h2>[ForEach ]</h2>
        )
    }
}

export default R014_ForEach