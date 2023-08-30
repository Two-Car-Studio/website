import './styling/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contacts from './pages/Contacts.js';
import BookNow from './pages/BookNow.js';
import LogIn from './pages/LogIn.js';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='AppContainer'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
            <Route path='/BookNow' element={<BookNow />} />
            <Route path='/LogIn' element={<LogIn />} />
          </Routes>
          <Footer/>
      </div>
    </>
  );
}

export default App;
