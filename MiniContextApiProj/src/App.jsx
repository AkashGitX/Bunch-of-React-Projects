import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1> App is Running........</h1>
      <Login/>
      <Profile/> 

    </UserContextProvider>
   
  )
}

export default App
