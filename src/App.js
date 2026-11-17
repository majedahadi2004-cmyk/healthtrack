
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Calculate from './Pages/Calculate.jsx'
import Contact from './Pages/Contact.jsx'
import Theme from './Pages/Theme.jsx'
import Tracker from './Pages/Tracker.jsx'

import './App.css';

function App() {
  return (
   <div className='App'>
   <Router>
   <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/About' exact Component={About}></Route>
        <Route path='/Services' exact Component={Services}></Route>
        <Route path='/Tracker' exact Component={Tracker}></Route>
        <Route path='/Calculate' exact Component={Calculate}></Route>
        <Route path='/Contact' exact Component={Contact}></Route>
        <Route path='/Theme' exact Component={Theme}></Route>
      </Routes>
   <Footer/>
   </Router>
   </div>

  );
}

export default App;
