import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PageOne/>}/>
        <Route path='/verified' element={<PageTwo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

