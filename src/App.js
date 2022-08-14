import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import CurrentlyPlaying from './Components/CurrentlyPlaying';
import MoviePosters from './Components/MoviePosters'
import Streaming from './Components/Streaming';
import Streams from './Components/Streams';
import ButtonWilson from './Components/ButtonWilson';
import Trailer from './Components/Trailers';



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/currently-playing' element={<CurrentlyPlaying/>}/>
        <Route path='currently-playing/trailer/:id' element={<Trailer/>}/>
        <Route path='/movie-posters' element={<MoviePosters/>}/>
        <Route path='/streaming' element={<Streaming/>}/>
        <Route path='/streaming/:id'element={<Streams/>}/>
        <Route path='/wow' element={<ButtonWilson/>}/>


     </Routes>

       
    </div>
  );
}

export default App;
