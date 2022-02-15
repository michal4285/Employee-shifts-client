import './App.css';
import Routes from './routes/routes';
import NavBar from './components/Navbar/Navbar'
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.title = "נותנים ידים"
  }, [])

  return (
    <>
      {/* <NavBar /> */}
      <Routes />
    </>
  );
}

export default App;
