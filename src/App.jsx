import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Ideation from './pages/Ideation';
import Docs from './pages/Docs';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideation" element={<Ideation />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
