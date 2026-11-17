import '../Styles/About.css'

const cards = [
    {id: 1, title: 'Our Mission', desc: 'To make it easy for everyone to build healthy habits, step by step.'},
    {id: 2, title: 'Our Vision', desc: 'A world where people understand their health and feel good every day.'}
];

const reasons = ['Easy to use for anyone', 'Activities, meals and workouts in one place', 'Free BMI calculator', 'Light and dark theme'];

const About =()=>{
    const theme = localStorage.getItem("theme");
    return(
        <div className={`About ${theme}`}>
            <h1>About Us</h1>
            <p className='intro'>HealthTrack is a website that helps people take care of their health. You can log your daily activities, meals and exercise in one place and check your progress anytime.</p>

            <div className='cards'>
                {cards.map((item)=>(
                    <div className='card' key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            <h2>Why HealthTrack?</h2>
            <ul>
                {reasons.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default About;
