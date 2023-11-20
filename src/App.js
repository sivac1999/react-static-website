import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Protfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Service />
      <Protfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
