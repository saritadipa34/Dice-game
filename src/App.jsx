import './App.css';
import EntrytPage from './components/EntryPage/EntrytPage';
import { useState } from 'react';
import GamePage from './components/GamePage/GamePage';


function App() {
const[entry,setEntry]=useState(false)

const gameStart=()=>{
setEntry(!entry)
}

  return (
    <>
    {entry ? (<EntrytPage gameStart={gameStart}/>) : (<GamePage  />)}
    </>
  )
}

export default App
