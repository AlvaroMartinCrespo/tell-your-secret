import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Layout from '../components/Layout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
