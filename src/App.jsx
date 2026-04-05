import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Timeline from './pages/Timeline';
import Legacy from './pages/Legacy';
import Family from './pages/Family';
import Gallery from './pages/Gallery';
import Memories from './pages/Memories';
import './index.css';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/story"    element={<Story />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/legacy"   element={<Legacy />} />
        <Route path="/family"   element={<Family />} />
        <Route path="/gallery"  element={<Gallery />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
      <Footer />
    </Router>
  );
}
