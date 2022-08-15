import { useState,} from "react";
import { getStreamingID } from "../Services/api";
import { Link } from "react-router-dom";

function Streaming(){
const [results,setResults] = useState(null)
const [word,setWord] = useState('')



async function handleClick(word){
   
   const response= await (await getStreamingID(word)).data.title_results
  
   
   setResults(response) 
}



    return(
        <div>
            <input type="text" value={word} onChange ={ e =>{
                let input = e.target.value
                setWord(input)}} placeholder="Movie or TV Show"/>

            <button onClick={()=>{
                handleClick(word)
            }}>Search Streaming</button>
             <h1> {results === null ? null: "Did you mean?" } </h1>
            
             {
                results === null ? null :
                results.map((result,index)=>{
                    return(
                       
                    <div key={index}>
                        
                        <h3>{result.name}</h3>
                        <Link to={`/streaming/${result.id}`}>View Services</Link>
                        
                        <p>Media type: {result.tmdb_type} | Released: {result.year}</p>
                    </div>
                    ) 
                })
            }
                
                
            

        </div>
    )
}

export default Streaming