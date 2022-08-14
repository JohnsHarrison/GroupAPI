import { useState } from "react"
import { getData, getPosters } from "../Services/api"

function MoviePosters() {
const [posters, setPosters] = useState([])
const [word,setWord] = useState('')

async function handleClick(word){
   const id = await (await getData(word)).data.results[0].id
   
   const list = await(await getPosters(id)).data.posters
   
   const mappedPosters = list.map((poster,index)=>{
    return(
             <div key={index} >
                 <img className="posterdh" src={poster.link} alt='poster'/>
             </div>
         )
   })
   setPosters(mappedPosters)

}
    return(
        
        <div>

        <input type="text" value={word} onChange ={ e =>{
                let input = e.target.value
                setWord(input)}} placeholder="Text"/>

        <button onClick={()=>{
            handleClick(word)
        }}>Search Posters</button>
            <div className="poster-container-dh"> 
                {posters}
            </div>
        </div>
    )
}

export default MoviePosters