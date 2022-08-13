import {useParams} from "react-router-dom"
import { useEffect } from "react";

function Streams(){
  const {id} = useParams();  
    useEffect(()=>{
        console.log(id)
    },[id])


    return(


<div>
<h3>hello</h3>
</div>
    )
}

export default Streams