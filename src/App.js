import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Profile from './pages/Profile';

function App() {
  const [username, setUsername] = useState("Prop Drilling");
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home username={username}/>}/>
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>}/>
          <Route path="/contact" element={<Contact username={username}/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
