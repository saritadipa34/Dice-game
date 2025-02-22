import { useState } from "react";
import Number from "./Number"

const Gamingpage=()=>{
    const[score,setScore]=useState(0)
    return(
        <div className="py-[50px] px-[50px]">
            <div className="flex justify-between">
                <div>
                <h1 className="text-5xl font-bold ml-6 mb-2">{score}</h1>
                <p className="font-bold">Total Score</p>
                </div>
            <Number />
            </div>

        </div>
    )
}
export default Gamingpage;