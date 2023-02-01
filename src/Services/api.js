import axios from "axios";

//IMDB
export async function getPlaying(){
const response = await axios.get(`https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_KEY1}`)
return response
}

export async function getData(word){
const response = await axios.get(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_API_KEY1}/${word}`)
return response
}

export async function getPosters(id){
const response = await axios.get(`https://imdb-api.com/en/API/Posters/${process.env.REACT_APP_API_KEY1}/${id}`)
return response
}

export async function getTrailer(id){
const response = await axios.get(`https://imdb-api.com/en/API/Trailer/${process.env.REACT_APP_API_KEY1}/${id}`)
return response
}

//Watchmode
export async function getStreamingID(word){
const response = await axios.get(`https://api.watchmode.com/v1/search/?apiKey=${process.env.REACT_APP_API_KEY2}&search_field=name&search_value=${word}`)
return response
}

export async function getStreaming(id){
const response = await axios.get(`https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${process.env.REACT_APP_API_KEY2}`)
return response
}

//owen wilson
export async function getWow(){
const response = await axios.get('https://owen-wilson-wow-api.onrender.com/wows/random')
return response
}

