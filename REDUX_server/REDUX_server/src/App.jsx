import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';


import { Routes, Route } from 'react-router-dom';
import EditBook from './components/Editproduct/Editbook';
import Createbook from './components/Createproduct/Createbook';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/create" element={<Createbook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </>
  )
}

export default App
