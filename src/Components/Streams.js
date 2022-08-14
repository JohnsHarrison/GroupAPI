import {useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import { getStreaming } from "../Services/api";




function Streams(){
const [services,setServices] = useState([])
const {id} = useParams(); 

  
    useEffect(()=>{
        async function fetchData(id){
            const response = await getStreaming(id)
            const results = response.data
            const mappedResults = results.map((result,index)=>{
                return (<div className="ServiceContainerjh">
                            <h3 style={{textDecoration: "underline"}}>{result.name} {result.type==="sub" ? "(subscrition)": null}</h3>
                            <h4>{ result.episodes === null ? "" : "Episodes:" + result.episodes}</h4>
                            <p>{result.episodes === null ? (result.type).toUpperCase() + " IN " + (result.format).toUpperCase() + " FORMAT" : null }</p>
                            <p>Price: {result.price === null ? "Free" : "$" + result.price } </p>
                            <a href={result.web_url} >
                             <button>Purchase</button>
                             </a>
                            
                        </div>        
                
                        )

            })
            setServices(mappedResults)
        }
   fetchData(id)
    },[])


return(
    <div className="Containerjh">
        {
            services===[] ? <h1>No Results Found</h1> : services
        }
    </div>
)
}

export default Streams