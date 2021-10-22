import React, { Component } from "react";

class R015_Map extends Component {

    componentDidMount() {
        var Map_Arr = [3, 2, 8, 8]
        let Map_newArr = Map_Arr.map(x => {return x})  // Map_Arr의 배열을 순회하며 Map_newArr 배열 값으로 맵핑
        console.log("1. Map_newArr : [" +Map_newArr+ "]")

        // Map_Arr의 배열을 순회하며 값*2 한 값을 Map_mulittiArr으로 맵핑
        let Map_mulitiArr = Map_Arr.map(x =>  {return x*2})
        console.log("2. Map_mulitiArr : [" +Map_mulitiArr+ "]")

        var ObjArray = [{key: 'react', value: '200'},
                        {key: '리액트', value: "TwoHundred"}]

        // ObjArray의 배열을 순회하며 값과 인덱스값을 Map_objArr에 맵핑
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index+3)+ ". obj : " +JSON.stringify(obj))
            var Obj = {}
            Obj[obj.key] = obj.value // ObjArray의 key, value 값을 Obj에 key, value 값으로 저장
            return Obj
        })
        console.log("5. Map_objArr : " +JSON.stringify(Map_objArr))
    }

    render() {
        return (
                <h2>[Map ]</h2>
        )
    }
}

export default R015_Map