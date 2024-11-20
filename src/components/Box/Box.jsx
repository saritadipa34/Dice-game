import React, { useState } from 'react'
import styles from "./box.module.css";

const Box = ({bgclr,setBgclr}) => {
    const nums=[1,2,3,4,5,6]

    const clr=(i)=>{
      console.log(bgclr)
        setBgclr(i)
    }
  return (
    <div className={styles.mainBox}>
{nums.map((num,i)=> <div onClick={()=>clr(i)} 
className={styles.box}
style={{backgroundColor: bgclr === i ? 'black' : 'white', color: bgclr === i ? 'white' : 'black'}
}
 key={i}
 >{num}
 </div>
)}

    </div>
  )
}

export default Box
