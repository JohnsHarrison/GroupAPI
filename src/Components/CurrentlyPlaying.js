import { useState,useEffect } from "react";
import { getPlaying } from "../Services/api";
import { useNavigate } from "react-router-dom";

function CurrentlyPlaying(){
const [playing,setPlaying] = useState([])
const navigate = useNavigate()
useEffect(()=>{
async function displayMovies(){

function handleClick(id){
 navigate(`trailer/${id}`)
}
    
    const movies = await (await getPlaying()).data.items
 
    const mappedMovies = movies.map((result,index)=>{
        return(
                <div className= {index % 2 === 0 ? "MovieContainerjh" : "MovieContainer2jh" } key = {index}>
               
                <img className="currentimgjh" src={"https://imdb-api.com/API/ResizeImage?apiKey=k_2zuvks88&size=1012x1500&url=" + result.image} alt=''></img>
                <div className="Infojh">
                <h1 className="movietitle">{result.title}({result.contentRating})</h1>
                <h4>Directed by: {result.directors}</h4>
                <p>{result.genres}</p>
                <p>IMDB rating: {result.imDbRating} |  Metacritic rating: {result.metacriticRating} | Runtime: {result.runtimeStr}</p>
                <p>{result.plot}</p>
                <button onClick={()=>{handleClick(result.id)}} >SEE TRAILER</button>
                
                </div>
            </div>

        )
    })

setPlaying(mappedMovies)
}


    displayMovies()
},[navigate])

    return(
        <div className="Containerjh">
            {playing}
        </div>
    )
}

export default CurrentlyPlaying