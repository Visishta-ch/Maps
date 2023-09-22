import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { LoadScript } from '@react-google-maps/api';

function App() {
  return (
    <LoadScript  googleMapsApiKey="AIzaSyDa5oS5i3LG4Ix4b_TgCYoWY_-g3VSeTLI">
      <div className="App">
      <Form />
    </div>
    </LoadScript>
   
  );
}

export default App;
