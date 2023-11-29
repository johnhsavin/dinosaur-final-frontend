import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';


import Header from './components/Header';
import Footer from './components/Footer';
import DinosaurList from './components/DinosaurList';
import AddDinosaur from './components/AddDinosaur';


function App() {
  const [environment, setEnvironment] = useState()


  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/land' element = {<DinosaurList />} />
          <Route path='/sea' element = {<DinosaurList />} />
          <Route path='/air' element = {<DinosaurList />} />
          <Route path='/newdiscovery' element = {<AddDinosaur />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
