import "../Styles/Home.css"
import {Link} from 'react-router-dom';
import logo from '../Assets/logo.svg'
const Home =()=>{
    const theme = localStorage.getItem("theme");
    return(
        <div className={`home ${theme}`}>
            <div className='hero'>
                <img src={logo} alt="not found"/>
                <h1>Welcome to HealthTrack</h1>
                <p>Your personal fitness and wellness tracker</p>
                <Link to='/Tracker' className='btn'>Get Started</Link>
            </div>

            <h2>How it works</h2>
            <div className='steps'>
                <div className='step'>
                    <span>1</span>
                    <h3>Log your day</h3>
                    <p>Add your activities, meals and workouts.</p>
                </div>
                <div className='step'>
                    <span>2</span>
                    <h3>Check your BMI</h3>
                    <p>Use the calculator to know where you are.</p>
                </div>
                <div className='step'>
                    <span>3</span>
                    <h3>See your progress</h3>
                    <p>Look back and see how much you improved.</p>
                </div>
            </div>

            <div className='quote'>
                <p>"Take care of your body. It's the only place you have to live."</p>
            </div>
        </div>
    )
}
export default Home;
