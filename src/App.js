import './App.css';
import { getPlaying } from './Services/api';
import CurrentlyPlaying from './Components/CurrentlyPlaying'
// console.log(process.env.REACT_APP_API_KEY1)


getPlaying()
// console.log(getPlaying())
// console.log(getPlaying2())
function App() {

  return (
    <div className="App">
     <CurrentlyPlaying></CurrentlyPlaying>
       
    </div>
  );
}

export default App;
