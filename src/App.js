
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './allroutes';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Allroutes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
