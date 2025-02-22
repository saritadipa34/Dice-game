
const Dice=({diceNum,onClick})=>{
    return(
        <div className="ml-[450px]" onClick={onClick}>
            <img 
             className="cursor-pointer" src={`/images/dice_${diceNum}.png`} alt="dice1" />
            </div>
    )
}
export default Dice;