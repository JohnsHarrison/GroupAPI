import axios from "axios";


export async function getPlaying(){
const response = await axios.get(`https://imdb-api.com/en/API/InTheaters/${process.env.REACT_APP_API_KEY1}`)
console.log(response)
return response
}

