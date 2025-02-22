
const Box=({num,onClick})=>{
    return(
        <div onClick={onClick} className="h-[50px] w-[50px] p-4 cursor-pointer border border-black">
            {num}
        </div>
    )
}
export default Box;