import '../Styles/About.css'
const About =()=>{
    const theme = localStorage.getItem("theme");
    return(
        <div className={`About ${theme}`}>
            <h1>About Us</h1>
            <p className='intro'>HealthTrack is a website that helps people take care of their health. You can log your daily activities, meals and exercise in one place and check your progress anytime.</p>

            <div className='cards'>
                <div className='card'>
                    <h2>Our Mission</h2>
                    <p>To make it easy for everyone to build healthy habits, step by step.</p>
                </div>
                <div className='card'>
                    <h2>Our Vision</h2>
                    <p>A world where people understand their health and feel good every day.</p>
                </div>
            </div>

            <h2>Why HealthTrack?</h2>
            <ul>
                <li>Easy to use for anyone</li>
                <li>Activities, meals and workouts in one place</li>
                <li>Free BMI calculator</li>
                <li>Light and dark theme</li>
            </ul>
        </div>
    )
}
export default About;
