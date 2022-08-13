import { useState,useEffect } from "react";
import { getStreaming,getStreamingID } from "../Services/api";

function Streaming(){
const [results,setResults] = useState(null)
const [streaming,setStreaming] = useState([])
const [word,setWord] = useState('')

console.log(word)
async function handleClick(word){
   const response= await (await getStreamingID(word)).data.title_results
   console.log(response)
   setResults(response)
}



    return(
        <div>
            <input type="text" value={word} onChange ={ e =>{
                let input = e.target.value
                setWord(input)}} placeholder="Text"/>

            <button onClick={()=>{
                handleClick(word)
            }}>Search</button>
             <h1> {results === null ? null : "Did you mean?" } </h1>
            
             {
                results === null ? null :
                results.map((result)=>{
                    return(<div>
                        <h3>{result.name}</h3>
                        <p>Media type: {result.tmdb_type} | Released: {result.year}</p>
                        </div>
                    ) 
                })
            }
                
                
            

        </div>
    )
}

export default Streaming