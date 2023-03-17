
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Layout/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div  className="App">
      <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
        </Route>
      
   </Routes>
    </div>
  );
}

export default App;
