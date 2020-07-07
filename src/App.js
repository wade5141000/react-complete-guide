import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const app = () => {

  // const [personsState, setPersonsState] = useState({
  //   persons:[
  //     {name:'wade', age:29},
  //     {name:'ivy', age:26}
  //   ],
  // })

  // const changeNameHandler = () => {
  //   setPersonsState({
  //     persons:[
  //       {name:'aaa', age:29},
  //       {name:'bbb', age:26}
  //     ]
  //   })
  // }

  // const [otherState, setOtherState] = useState('some state value')

  const oldNames = ['Wade', 'Ivy', 'Sam']

  const [nameState, setNameState] = useState({
    name: oldNames[0]
  })

  const changeNameHandler = (event) => {
    setNameState({
      name: event.target.value
    })
  }

  return (
    <div className="App">
      <UserInput changeName={changeNameHandler}/>
      <UserOutput oldName={oldNames[0]} newName={nameState.name}/>
      <UserOutput oldName={oldNames[1]} newName={nameState.name}/>
      <UserOutput oldName={oldNames[2]} newName={nameState.name}/>
    </div>
  );
  
}

export default app;