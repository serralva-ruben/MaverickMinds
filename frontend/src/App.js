import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
