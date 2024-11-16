import React from 'react'
import styles from "./button.module.css";

const Button = ({onClick,label}) => {
const buttonClass=`${styles.btn}`

  return (
      <button onClick={onClick} className={buttonClass}>
{label}
    </button>
   
  )
}

export default Button
