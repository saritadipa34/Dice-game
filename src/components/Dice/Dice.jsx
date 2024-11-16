import React from 'react'
import styles from './dice.module.css';

const Dice = () => {
  return (
    <div>
      <img  className={styles.dice} src="./images/dice_1.png" alt="dice" />
      <p className={styles.left}>Click on Dice to roll</p>
    </div>
  )
}

export default Dice
