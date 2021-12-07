import './App.scss';
import Hero from './components/Hero/Hero';
import Info2 from './components/Info-2/Info2';
import Info from './components/Info/Info';
import Social from './components/Social/Social';
import Team from './components/Team/Team';
import Pay from './components/Pay/Pay';
import Media from './components/Media/Media';

import Navbar from './layout/Navbar/Navbar';

function App() {
  return (
    <div id="main" >
      <Navbar/>
      <Hero/>
     <div className="container">
     <Info/>
      <Info2/>
      <Team/> 
      <Social/>
      <Media/>

      <Pay/>
     </div>
    </div>
  );
}

export default App;
