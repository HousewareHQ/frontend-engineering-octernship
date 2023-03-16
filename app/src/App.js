import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'
import Show from './components/Show/Show';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show' element={<Show/>}/>
      </Routes>
    </div>
  );
}

export default App;
