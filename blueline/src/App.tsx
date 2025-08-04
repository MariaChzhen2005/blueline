import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;