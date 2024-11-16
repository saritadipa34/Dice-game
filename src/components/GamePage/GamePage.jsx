import React from 'react'
import styles from './gamePage.module.css';
import Box from '../Box/Box'
import Dice from '../Dice/Dice';
import Button from '../Button/Button';

const GamePage = () => {
  return (
    <>   <div className={styles.main}>

<div className={styles.head}>
  <div className={styles.num}>
<h1 className={styles.para}>0</h1>
<p className={styles.left}>Total Score</p>
</div>

<div >
  <Box />
  <p>Select Number</p>
</div>
</div>

<Dice />
<Button label="Reset Scores" className="reset" type="reset"/>
<Button label="Show Rules" type="button" className="rules" />
   </div>
   </>

  )
}

export default GamePage

