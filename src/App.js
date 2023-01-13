import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetUser from './pages/getUser';
import PostUser from './pages/postUser';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/post' element={<PostUser/>}/>
        <Route path='/' element={<GetUser/>}/>

      </Routes>
      
        </BrowserRouter>
  );
}

export default App;
