import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Qualification from './Components/Qualification';
import Skills from './Components/Skills';
import NavbarCom from './Components/Navbar';
import Education from './Components/Education';
import Experience from './Components/Experience';

function App() {
  return (
   <BrowserRouter>
    <NavbarCom/>
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="Qualification" element={<Qualification/>}>
      <Route index element={<Navigate to="Education" replace/>}/>
      <Route path="Education" element={<Education/>}/>
      <Route path="Experience" element={<Experience/>}/>
    </Route>    
                                  
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="/Contacts" element={<Contacts/>} />
    </Routes>
  </BrowserRouter> 
  )
}

export default App;
