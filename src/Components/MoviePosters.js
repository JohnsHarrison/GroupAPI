import axios from "axios"
import { useEffect, useState } from "react"

function MoviePosters() {

    const [posters, setPosters] = useState([])

    async function getPosters() {
        const response = await axios.get(`https://imdb-api.com/en/API/Posters/${process.env.REACT_APP_API_KEY1}/tt1375666`)

        console.log(response)

        const mappedPosters = response.data.posters.map((poster) => {
            return (
                <div >
                    <img className="posterdh" src={poster.link} alt='poster' />
                </div>
            )
        })

        console.log(mappedPosters)
        setPosters(mappedPosters)
    }

    useEffect(() => {
        getPosters()
    }, [])

    return (
        <div className="poster-container-dh">
            {posters}
        </div>
    )
}

export default MoviePosters