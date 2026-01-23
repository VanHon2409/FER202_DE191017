import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Carousels from './components/Carousels';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Carousels />
            <Menu />
            <Booking />
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
