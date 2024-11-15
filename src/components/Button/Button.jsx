import React from 'react'
import styles from "./button.module.css";

const Button = ({onClick,label}) => {
  return (
      <button onClick={onClick}  className={styles.btn}>
{label}
    </button>
   
  )
}

export default Button
