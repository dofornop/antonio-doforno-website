import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Timeline from './pages/Timeline';
import Roots from './pages/Roots';
import Legacy from './pages/Legacy';
import Awards from './pages/Awards';
import TravelAgency from './pages/TravelAgency';
import Community from './pages/Community';
import Faith from './pages/Faith';
import Tributes from './pages/Tributes';
import Press from './pages/Press';
import Family from './pages/Family';
import Gallery from './pages/Gallery';
import Memories from './pages/Memories';
import Videos from './pages/Videos';
import './index.css';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/story"          element={<Story />} />
        <Route path="/timeline"       element={<Timeline />} />
        <Route path="/roots"          element={<Roots />} />
        <Route path="/legacy"         element={<Legacy />} />
        <Route path="/awards"         element={<Awards />} />
        <Route path="/travel-agency"  element={<TravelAgency />} />
        <Route path="/community"      element={<Community />} />
        <Route path="/faith"          element={<Faith />} />
        <Route path="/tributes"       element={<Tributes />} />
        <Route path="/press"          element={<Press />} />
        <Route path="/family"         element={<Family />} />
        <Route path="/gallery"        element={<Gallery />} />
        <Route path="/memories"       element={<Memories />} />
        <Route path="/videos"         element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  );
}
