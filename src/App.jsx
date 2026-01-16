import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import Ideation from './pages/Ideation';
import Docs from './pages/Documentation';
import Sources from './pages/Sources';
import './App.css';

function App() {
  return (
    <Router basename="/The_Future_of_Folk_LV">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideation" element={<Ideation />} />
          <Route path="/documentation" element={<Docs />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
