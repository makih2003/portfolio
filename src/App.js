import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const routerBaseName = process.env.PUBLIC_URL;

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;