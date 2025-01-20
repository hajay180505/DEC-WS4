import React from 'react';
import './App.css';
// import Navbar  from './components/Navbar'
import NavbbarNew  from './components/NavbbarNew'
import Library from './components/Library';
import Main from './components/Main';

function App() {
  return (
    <div className='bg-black h-screen flex flex-col'>
      {/* <Navbar/> */}
      <NavbbarNew />
      <div className="w-100 flex flex-grow">
        <Library/>
        <Main />
      </div>
    </div>
  );
}

export default App;
