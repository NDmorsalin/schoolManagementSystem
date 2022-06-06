import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Home from './Pages/Home/Home';
import Page from './Pages/Page';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = (e) => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="App">
      <SideBar setIsOpen={setIsOpen} isOpen={isOpen} handleMenu={handleMenu} />
      <Page setIsOpen={setIsOpen} isOpen={isOpen} handleMenu={handleMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/admin" element={<Home />} />
        </Routes>
      </Page>
    </div>
  );
}

export default App;

/* <div className="App">
      <SideBar />

      <Routes>
        <Route to="/home" element={<Page />} />
      </Routes>
    </div> */
