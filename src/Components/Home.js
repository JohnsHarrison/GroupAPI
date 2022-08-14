

function Home() {
    return (

        <div className="home">
            <img className="buffalo" src={require("../Images/bufflogo.png")} alt="buffalogo" />
            <img className="textlogo" src={require("../Images/textlogo.png")} alt="MOVIE BUFFALO" />
            <div className="pcontainerhome1"><p>We made <span className="yellowtext"> Movie Buffalo </span>for the Movie Buffs out there.</p></div>
            <div className="pcontainerhome2"><p>See what's at the cinema <span className="yellowtext">right now.</span></p></div>
            <div className="pcontainerhome3"><p>Search through <span className="yellowtext">promotional posters</span> for your favorite movies.</p></div>
            <div className="pcontainerhome4"><p>Check if a movie or TV show is <span className="yellowtext">available for streaming,</span> and where. </p></div>




        </div>
    )
}

export default Home