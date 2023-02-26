import {useState} from 'react';
import './App.css';
import Side from './components/side/Side';
import Nav from './components/nav/Nav.jsx';
import Main from './components/main/Main.jsx';
import RightSide from './components/right-side/RightSide.jsx';

function App() {
  return (
    <div className='App'>
      <Side />
      <Nav />
      <Main />
      <RightSide />
    </div>
  );
}

export default App;
