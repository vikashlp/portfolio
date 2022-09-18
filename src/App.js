import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Mid from './Mid'
import Footer from './Footer';
import Project from './project';
import Slide from './Slide';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Mid />
      <Project />
      <Slide />
      <Footer/>
    </div>
  );
}

export default App;
