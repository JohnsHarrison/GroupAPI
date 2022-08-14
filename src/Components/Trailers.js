import {useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import {getTrailer } from "../Services/api";


function Trailer(){
const [trailer,setTrailer] = useState(null)
const {id} = useParams(); 
useEffect(()=>{
    async function fetchData(id){
    const response = await getTrailer(id)
    const results = response.data
    console.log(results)
    setTrailer(results)
    }
    fetchData(id)
},[])



    return(
        <div>
            
           <h1>{trailer.title}</h1>
           <h2>{trailer.videoTitle}</h2>
           <h3>"{trailer.videoDescription}"</h3>
            <iframe title="trailer" src={trailer.linkEmbed} width="700" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe>
           
       
        </div>
    )
}

export default Trailer