import { useState } from "react";
import Number from "./Number";
import Button from "./Button";
import Dice from "./Dice";
import Rules from "./Rules";

const Gamingpage=()=>{
    const[diceImg,setDiceImg]=useState(1)
    const[showRules,setShowRules]=useState(false)
    const[score,setScore]=useState(0)

const handleRule=()=>{
    setShowRules(!showRules)
    console.log("rules")
}

const handleNum=()=>{
    const randomNum=Math.floor(Math.random() * 6) + 1
    setDiceImg(randomNum)
    console.log(randomNum)
}

    return(
        <div className="pt-[30px] pb-0 px-[50px]">
            <div className="flex justify-between">
                <div>
                <h1 className="text-5xl font-bold ml-6 mb-2">{score}</h1>
                <p className="font-bold">Total Score</p>
                </div>
                <p className="text-center">Please select a  Number</p>
            <Number />
            </div>
           <Dice diceNum={diceImg} onClick={handleNum}/>
            <div className="flex gap-1 justify-center flex-col items-center">
                <p>Click on Dice to roll</p>
            <Button  texts={"Reset Score"}  style={{backgroundColor:"white",color:"black"}}/>
            <Button texts=  {showRules ?  "Hide Rules" : "Show Rules"}
            onClick={handleRule} />
            </div>
            { showRules && <Rules /> }
           
        </div>
    )
}
export default Gamingpage;