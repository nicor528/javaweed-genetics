import robot from "./robot-weed.svg"

function CartWidget(){
    return(
        //<img className="d-block mx-auto mb-4" src="./robot.png" alt="" width="150" height="57"/>
        <img src={robot} margin-left="220px" width="80" height="70"></img>    
    )
}

export default CartWidget