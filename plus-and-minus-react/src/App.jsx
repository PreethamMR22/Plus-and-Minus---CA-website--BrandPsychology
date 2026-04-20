import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Startup from './pages/Startup';
import IncomeTax from './pages/IncomeTax';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/services/startup" element={<Startup />} />
            <Route path="/services/income-tax" element={<IncomeTax />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
