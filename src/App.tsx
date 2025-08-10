import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Chemicals from './pages/Chemicals';
import Equipment from './pages/Equipment';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter basename="/blueline/">
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chemicals" element={<Chemicals />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}