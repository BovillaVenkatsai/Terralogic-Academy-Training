
import Card from './Button';

import React from 'react'
import MyClassComponenet from './MyClassComponenet'

const App = () => {
  return (
    <div className="App">
      <MyClassComponenet />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* React <code>App</code> and its logo. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        {/* <Button name="A"/>
        <Button name="B"/>
        <Button name="C"/> */}
        <Card name='bovilla' age={19} company='Terralogic' course='Frontend'/>
        <Card name='sree' age={20} company='wipro' course='Backend'/>
        {/* <Card name='bovilla' age={19} company='Terralogic' course='Frontend'/> */}
        <Card name='sai' age={125} company='cisco' course='Tester'/>
      </header>
    </div>
  )
}

export default App
