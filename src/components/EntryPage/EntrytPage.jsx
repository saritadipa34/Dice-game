import React from 'react'
import styles from "./entrypage.module.css"
import Button from '../Button/Button';


const EntrytPage = ({gameStart}) => {
  return (
    <div className={styles.container}>
      <div className={styles.entry}>
        <img className={styles.img} src="images/coverpic..jpeg" alt="entry" />
      </div>  

<div className={styles.h1}>
    <h1>DICE GAME</h1>
    <Button onClick={gameStart} label="Play Now"   /> 
</div>

    </div>
  )
}

export default EntrytPage
