import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
import WeatherFooter from './components/WeatherFooter';

function App() {
  return (
    <div className="App container" >
      <WeatherLocation />
    </div>
  );
}

export default App;
