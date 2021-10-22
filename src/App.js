import React from 'react';
import './App.css';
// import ImportConponent from './R003/R003_ImportConponent';
// import LifecycleEx from './R004/R004_LifecycleEx';
// import LifecycleEx2 from './R005/R005_LifecycleEx';
// import LifecycleEx3 from './R006/R006_LifecycleEx';
// import LifecycleEx4 from './R007/R007_LifecycleEx';
// import LifecycleEx5 from './R008/R008_LifecycleEx';
// import LifecycleEx6 from './EX/LifecycleEx1';
// import Es6 from './R009/R009_Es6';
// import Variable from './R010/R010_Variable';
// import SpreadOperator from './R011/R011_SpreadOperator';
// import ClassPrototype from './R012/R012_Class&Prototype';
// import ForEach from './R014/R014_ForEach';
// import Map from './R015/R015_Map';
// import Props from './R017/R017_Props';
// import PropsDatatype from './R018/R018_PropsDatatype';
// import PropsBoolean from './R019/R019_PropsBoolean';
// import PropsObjVal from './R020/R020_PropsObjVal';
// import PropsRequired from './R021/R021_PropsRequired';
// import PropsDefault from './R022/R022_PropsDefault';
// import PropsNode from './R023/R023_PropsNode';

function App() {
  const arr = ['봄', '여름', '가을', '겨울']
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <ImportConponent></ImportConponent>
      <LifecycleEx></LifecycleEx>
      <LifecycleEx2></LifecycleEx2>
      <LifecycleEx3 prop_value = 'FromApp.js' />
      <LifecycleEx4 prop_value = 'FromApp2.js' /> 
      <LifecycleEx5 prop_value='FromApp3.js' />
      <LifecycleEx6></LifecycleEx6>
      <Es6 />
      <Variable />
      <SpreadOperator />
      <ClassPrototype />
      <ForEach />
      <Map />

      props 변수 props_val에 문자열 저장
      <Props props_val="This is Props" />
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps : function!")}
      />
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
      <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} />
      <PropsRequired ReactNumber={200} />
      <PropsDefault ReactNumber={200} />
      <PropsNode><span>node from App.js</span></PropsNode> */}
    </div>
  )
}

export default App;