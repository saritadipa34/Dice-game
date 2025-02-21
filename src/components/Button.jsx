
const Button=({style,onClick})=>{
    return(
        <button style={style} onClick={onClick} className="bg-black cursor-pointer px-9 border border-black-500 text-white rounded-sm">
            click me
        </button>
    )
}
export default Button;