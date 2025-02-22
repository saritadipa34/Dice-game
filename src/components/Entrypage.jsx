import Gamingpage from "./Gamingpage";
import Button from "./Button";
import { useState } from "react";

const Entrypage=()=>{
const [page,setPage]=useState(true)
    
    const handleButton=()=>{
        setPage(true)
        console.log("click")
    }

    return(
        page ? ( <Gamingpage />) : (
        <div className="h-screen w-screen p-[130px]  flex">
            <img className="h-[350px] w-[550px]" src="/images/dicecover.jpeg" alt="entry" />
            <div>
                <h1 className="text-7xl mt-20 mb-5 font-bold  ">DICE GAME</h1>
                <Button texts={"Play Now"} style={{marginLeft:"230px"}}  onClick={handleButton}/>
            </div>
        </div>
    )
)
}
export default Entrypage;