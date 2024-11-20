import React, { useState } from 'react'
import styles from './dice.module.css';

const Dice = ({diceNum,roleDice}) => {
 
  
  return (
    <div>
      <img onClick={roleDice}  className={styles.dice}
       src={`/images/dice_${diceNum}.png`} alt="dice" />
      <p className={styles.left}>Click on Dice to roll</p>
    </div>
  )
}

export default Dice
