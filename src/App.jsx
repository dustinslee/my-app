import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='App'>
      <h1 id="mainHeader">React Router</h1>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />}/>
          <Route path="/about/:heroId" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NoMatch />}/>
        </Route>
      </Routes>
    </div>
  );
}