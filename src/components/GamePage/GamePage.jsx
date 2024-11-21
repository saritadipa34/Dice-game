import React, { useState } from 'react'
import styles from './gamePage.module.css';
import Box from '../Box/Box'
import Dice from '../Dice/Dice';
import Button from '../Button/Button';
import Instruction from '../Instruction/Instruction';

const GamePage = () => {

  const [score,setScore]=useState(0);
  const[bgclr,setBgclr]=useState();
  const[diceNum,setDiceNum]=useState(1);
  const[error,setError]=useState();
  const[rules,setRules]=useState(false);

  const numGenerator=(min, max)=>{
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min);
  
    }

    const roleDice=()=>{
    if(!bgclr) {
      setError("You have not selected any Number")
      return;
    }
    setError("");

const randomNum=numGenerator(1,7);
setDiceNum(randomNum);

if(bgclr === randomNum){
  setScore((prev)=> prev + randomNum)
} else{
  setScore((prev)=> prev -2)
}
setBgclr(undefined)     
}

const resetBtn=()=>{
  setScore(0)
}

const showRules=()=>{
setRules(!rules)
}

  return (
    <>
    <div className={styles.main}>
  <div className={styles.head}>
  <div className={styles.num}>
<h1 className={styles.para}>{score}</h1>
<p className={styles.left}>Total Score</p>
</div>

<div >
  <p className={styles.error}>{error}</p>
  <Box  bgclr={bgclr} setBgclr={setBgclr} error={error}/>
  <p className={styles.select}>Select Number</p>
</div>
</div>

<Dice diceNum={diceNum} roleDice={roleDice} />
<Button label="Reset Scores" onClick={resetBtn} className="reset" type="reset"/>

< Button label={rules ? "Hide Rules" : "Show Rules"} onClick={showRules} type="button" className="rules" /> 

{rules && <Instruction />}
   </div>
   </>

  )
}

export default GamePage

