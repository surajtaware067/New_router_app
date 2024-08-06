import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import PageNotFound from './Component/PageNotFound';

function App() {
  const navigate = useNavigate();
  // const NavigateToAbout =()=>{
  //   navigate('/about');
  // }
  const NavigateTo = (url) => {
    navigate(url);
  }
  const NavigateToWhere = () => {
    let name = 'Suraj';
    if (name == 'suraj')
    {
      navigate('/about');
    }
    else
    {
      navigate('/contact')
    }

}

return (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    {/* <button onClick={ ()=>navigate('/about')}>About</button> */}
    {/* <button onClick={()=>NavigateToAbout()}>About</button>
    <button onClick={ ()=>navigate('/contact')}>Contact</button> */}
    <button onClick={() => NavigateTo('/about')}>About</button>
    <button onClick={() => NavigateTo('/contact')}>Contact</button>
    <button onClick={() => NavigateToWhere()}>Click Me</button> 
    <button onClick={()=>navigate(-1)}>Go Back</button>

  </>

);
}

export default App;
