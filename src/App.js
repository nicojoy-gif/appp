import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import About from './component/About'; 
import Link from './component/Link';
import Job from './component/Job';
import Live from './component/Live';
import Appren from './component/Appren';
import Trial from './component/Trial'
import Eula from './component/Eula';
import Login from './component/Login';
import Help from './component/Help';
import Features from './component/Features';
import WhatLive from './component/whatLive';
import Max from './component/MaxLive';
import Learn from './component/Learn';
import Hardware from './component/Hardware';
import Buy from './component/Buy';
import Compare from './component/Compare';
import Note from './component/Note';
function App() {
  return (
    <>
      <Nav />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="link" element={<Link />} />
        <Route path="live" element={<Live />} />
        <Route path='trial' element={<Trial />} />
<Route path='eula' element={<Eula />} />
      
        <Route path='/jobs' element={<Job />} />
        <Route path='/appre' element={<Appren />} />
        <Route path='/login' element={<Login />} />
        <Route path='/eula' element={<Eula />} />
        <Route path='/help' element={<Help />} />
        <Route path='/feature' element={<Features />} />
        <Route path='/what' element={<WhatLive />} />
        <Route path='/max' element={<Max />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/hardware' element={<Hardware />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/note' element={<Note />} />
       </Routes>
      </>
  );
}

export default App;
