import './App.css'
import Body from './components/Body'
import Header from './components/Header'

import { useState } from "react"

function App() {
  const [user, setUser] = useState("Joe")


  return (
    <main>
      <Header user={user} />
      <Body user={user} />
    </main>
  )
}

export default App
