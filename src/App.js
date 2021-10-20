import React from 'react';
import './App.css';
import ImportConponent from './R003/R003_ImportConponent';
// import LifecycleEx from './R004/R004_LifecycleEx';
// import LifecycleEx2 from './R005/R005_LifecycleEx';
// import LifecycleEx3 from './R006/R006_LifecycleEx';
// import LifecycleEx4 from './R007/R007_LifecycleEx';
import LifecycleEx5 from './R008/R008_LifecycleEx';


function App() {
  return (
  <div>
    <h1>Start React 200!</h1>
    <p>CSS 적용하기</p>
    <ImportConponent></ImportConponent>
    {/* <LifecycleEx></LifecycleEx>
    <LifecycleEx2></LifecycleEx2>
    <LifecycleEx3 prop_value = 'FromApp.js' />
    <LifecycleEx4 prop_value = 'FromApp2.js' />  */}
    <LifecycleEx5 prop_value = 'FromApp3.js' /> 
  </div>
  )
}

export default App;