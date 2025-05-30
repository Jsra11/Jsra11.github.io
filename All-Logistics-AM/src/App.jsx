
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WhatsappButton from './components/botonws';
import Footer from './components/Footer';
import Acercade from './pages/Acercade'; 

function App() {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<Acercade />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
