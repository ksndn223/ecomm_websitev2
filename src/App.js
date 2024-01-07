//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Footer/>
   
      <Routes> 
      <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>

    </div>
  );
}

export default App;
