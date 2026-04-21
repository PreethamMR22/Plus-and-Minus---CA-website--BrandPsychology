import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import Accounting from './pages/Accounting';
import './styles/globals.css';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
            <Route path="/services/accounting" element={<Accounting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
