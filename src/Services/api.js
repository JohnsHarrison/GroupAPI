import axios from "axios";

//IMDB
export async function getPlaying(){
const response = await axios.get(`https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_KEY1}`)
// console.log(response)
return response
}
//Watchmode
export async function getStreamingID(word){
const response = await axios.get(`https://api.watchmode.com/v1/search/?apiKey=${process.env.REACT_APP_API_KEY2}&search_field=name&search_value=${word}`)
console.log(response)
return response
}

export async function getStreaming(id){
const response = await axios.get(`https://api.watchmode.com/v1/title/${id}/sources/?apiKey=${process.env.REACT_APP_API_KEY2}`)
console.log(response)
return response
}

//owen wilson
export async function getWow(){
const response = await axios.get('https://owen-wilson-wow-api.herokuapp.com/wows/random')
console.log(response)
return response
}