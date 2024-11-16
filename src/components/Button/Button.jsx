import React from 'react'
import styles from "./button.module.css";

const Button = ({onClick,label,type}) => {
const buttonClass=`${styles.btn} ${type === "reset" ? styles.buttonClass : ""}
 ${type === "button" ? styles.buttonClass : ""}`;

  return (
      <button onClick={onClick} className={buttonClass} type={type}>
{label}
    </button>
   
  )
}

export default Button
