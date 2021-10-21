import React from 'react';
import './App.css';
// import ImportConponent from './R003/R003_ImportConponent';
// import LifecycleEx from './R004/R004_LifecycleEx';
// import LifecycleEx2 from './R005/R005_LifecycleEx';
// import LifecycleEx3 from './R006/R006_LifecycleEx';
// import LifecycleEx4 from './R007/R007_LifecycleEx';
import LifecycleEx5 from './R008/R008_LifecycleEx';
import LifecycleEx6 from './EX/LifecycleEx1';
import Es6 from './R009/R009_Es6';
import Variable from './R010/R010_Variable';
import SpreadOperator from './R011/R011_SpreadOperator';


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
    <LifecycleEx4 prop_value = 'FromApp2.js' />  */}
    <LifecycleEx5 prop_value = 'FromApp3.js' />
    <LifecycleEx6></LifecycleEx6>
    <Es6/>
    <Variable/>
    <SpreadOperator/>
  </div>
  )
}

export default App;