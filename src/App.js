import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
