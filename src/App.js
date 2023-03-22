import './App.css';
import { Page1 } from './components/Page1/Page1';
import { Page2 } from './components/Page2/Page2';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


