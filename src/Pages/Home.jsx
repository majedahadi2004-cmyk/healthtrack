import "../Styles/Home.css"
import {Link} from 'react-router-dom';
import logo from '../Assets/logo.svg'

const steps = [
    {id: 1, title: 'Log your day', desc: 'Add your activities, meals and workouts.'},
    {id: 2, title: 'Check your BMI', desc: 'Use the calculator to know where you are.'},
    {id: 3, title: 'See your progress', desc: 'Look back and see how much you improved.'}
];

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
                {steps.map((item)=>(
                    <div className='step' key={item.id}>
                        <span>{item.id}</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className='quote'>
                <p>"Take care of your body. It's the only place you have to live."</p>
            </div>
        </div>
    )
}
export default Home;
