import Option from "./option";
var style = {
    fontSize: "30px", 
    textAlign: "center",
    height: "80px"
}
function Head(){
    return(
    <div className="Block" style={style}>
        Mini BlockChain
        <Option></Option>
    </div>


    )
}
export default Head;