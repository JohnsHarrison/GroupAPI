import { useState } from "react"
import { getData, getPosters } from "../Services/api"

function MoviePosters() {
const [posters, setPosters] = useState([])
const [word,setWord] = useState('')

async function handleClick(word){
    if(word === ''){
        return alert("Please enter a word and try again")
        }
   const response = await getData(word)
   if(!response[0]){
    return alert("Please check your spelling and try again")
   }
   const id = response.data.results[0].id
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
                setWord(input)}} placeholder="Movie or TV Show"/>

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