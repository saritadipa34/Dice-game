import Box from "./Box";

const Number=()=>{
    const nums=[1,2,3,4,5,6]

const handleClick=()=>{
    const res= nums[Math.floor(Math.random() * nums.length)]
    console.log(res)
}

    return(
        <div>
        <div className="flex gap-2">
{nums.map((num,index)=>
    (
        <Box key={index} num={num}  onClick={handleClick}/>
    )
)}
        </div>
        <p className="ml-[120px] mt-2">Select Number</p>
        </div>
    )
}
export default Number;