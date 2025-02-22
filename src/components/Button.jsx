
const Button=({style,onClick,texts})=>{
    return(
        <button style={style} onClick={onClick} className="bg-black cursor-pointer px-9 border border-black-500 text-white rounded-sm">
            {texts}
        </button>
    )
}
export default Button;