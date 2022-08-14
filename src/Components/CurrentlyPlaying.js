import { useState,useEffect } from "react";
import { getPlaying } from "../Services/api";

function CurrentlyPlaying(){
const [playing,setPlaying] = useState([])

async function displayMovies(){
    const movies = await (await getPlaying()).data.items
    console.log(movies)
    const mappedMovies = movies.map((result,index)=>{
        return(
                <div className= {index % 2 === 0 ? "MovieContainerjh" : "MovieContainer2jh" } key = {index}>
                <img className="currentimgjh" src={"https://imdb-api.com/API/ResizeImage?apiKey=k_2zuvks88&size=1012x1500&url=" + result.image} alt=''></img>
                <div className="Infojh">
                <h1>{result.title}({result.contentRating})</h1>
                <h4>Directed by: {result.directors}</h4>
                <p>{result.genres}</p>
                <p>IMDB rating: {result.imDbRating} |  Metacritic rating: {result.metacriticRating} | Runtime: {result.runtimeStr}</p>
                <p>{result.plot}</p>
                
                </div>
            </div>

        )
    })

setPlaying(mappedMovies)
}


useEffect(()=>{
    displayMovies()
},[])

    return(
        <div className="Containerjh">
            {playing}
        </div>
    )
}

export default CurrentlyPlaying