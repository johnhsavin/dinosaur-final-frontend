import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import DinosaurList from './components/DinosaurList';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/land' element={<DinosaurList environment={'land'} />} />
          <Route path='/sea' element={<DinosaurList environment={'sea'} />} />
          <Route path='/air' element={<DinosaurList environment={'air'} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
