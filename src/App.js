import './App.css';
import { getPlaying, getStreaming,getStreamingID } from './Services/api';
import CurrentlyPlaying from './Components/CurrentlyPlaying'
import Streaming from './Components/Streaming';


const word= "simpsons"


function App() {

  return (
    <div className="App">
     {/* <CurrentlyPlaying></CurrentlyPlaying> */}
     <Streaming></Streaming>
       
    </div>
  );
}

export default App;
