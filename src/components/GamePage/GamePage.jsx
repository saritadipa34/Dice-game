import React from 'react'
import styles from './gamePage.module.css';
import Box from '../Box/Box'

const GamePage = () => {
  return (
   <div className={styles.main}>

<div className={styles.head}>
  <div className={styles.num}>
<h1 className={styles.para}>0</h1>
<p >Total Score</p>
</div>

<div >
  <Box />
  <p>Select Number</p>
</div>
</div>
   </div>
  )
}

export default GamePage

