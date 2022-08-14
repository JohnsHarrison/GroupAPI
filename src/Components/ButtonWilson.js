import { getWow } from "../Services/api";
import image from "../Images/OwenWilson.png"

function ButtonWilson(){
    async function handleClick(){
    const audio = await (await getWow()).data[0].audio
    console.log(audio)
    const sound = new Audio(audio);
    sound.play()
    }
    return(
        <div className="WilsonContainer">
            <img className="OwenWilson" alt='' src={image} onClick={()=>{
                handleClick()
            }}></img>

        </div>       
    )
}

export default ButtonWilson