import '../Styles/Navbar.css'
import logo from '../Assets/logo.svg'
import {Link} from 'react-router-dom';
const Navbar =()=>{
    return (
        <div className="Navbar">
           <div className='leftside'>
            <img src={logo} alt="not found"/>
            <h2>HealthTrack</h2>
           </div>
           <div className='rightside'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Services'>Services</Link>
            <Link to='/Tracker'>Tracker</Link>
            <Link to='/Calculate'>Calculate</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Theme'>Theme</Link>
           </div>
        </div>
    )
}
export default Navbar;
