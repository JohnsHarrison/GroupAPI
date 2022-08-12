import './App.css';
import { Route, Routes } from 'react-router-dom';

import { getPlaying } from './Services/api';
import Header from './Components/Header';
import Home from './Components/Home';
import CurrentlyPlaying from './Components/CurrentlyPlaying';
import MoviePosters from './Components/MoviePosters'
// console.log(process.env.REACT_APP_API_KEY1)


// getPlaying()
// console.log(getPlaying())
// console.log(getPlaying2())
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/currently-playing' element={<CurrentlyPlaying/>}/>
        <Route path='/movie-posters' element={<MoviePosters/>}/>

     </Routes>
       
    </div>
  );
}

export default App;
