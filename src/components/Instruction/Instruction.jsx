import React from 'react'
import styles from './instruction.module.css';

const Instruction = () => {
  return (
    <div className={styles.Instruction}>
      <h1>How to play Dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on dice if seleted number is equal to dice number you will get some point as dice</p>
      <p>if you get wrong guess then 2 point will be deducted</p>
    </div>
  )
}

export default Instruction
