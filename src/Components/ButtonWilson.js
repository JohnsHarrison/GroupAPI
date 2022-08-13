import { getWow } from "../Services/api";
import image from "../assets/OwenWilson.png"

function ButtonWilson(){
    async function handleClick(){
    const audio = await (await getWow()).data[0].audio
    console.log(audio)
    const sound = new Audio(audio);
    sound.play()
    }
    return(
        <div>
            <img src={image}></img>
            <button onClick={()=>{
                handleClick()
            }} >Button</button>
        </div>       
    )
}

export default ButtonWilson