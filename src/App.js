import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Homepage from './pages/Home';
import Aboutpage from './pages/About';
import { useState } from 'react';


function App() {
  const [pageRender, setPageRender] = useState('home')
  return (
    <div>
      <Navbar pageRender={pageRender} setPageRender={setPageRender} />
      {pageRender === 'home' ? <Homepage /> : ""}
      {pageRender === 'About Me' ? <Aboutpage /> : ""}
      {pageRender === 'My Showcase' ? <Showcase /> : ""}
      {pageRender === 'Contact' ? <Contact /> : ""}
      {pageRender === 'Jumbotron' ? <Jumbotron /> : ""}
      {pageRender === 'About' ? <About /> : ""}

      <section className="the-meat">

      </section>
      <Footer />
    </div>
  );
}

export default App;
