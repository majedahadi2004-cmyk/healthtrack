import '../Styles/Services.css'
import ServiceItem from '../Components/ServiceItem.jsx'
import Activity from '../Assets/activity.svg'
import Meal from '../Assets/meal.svg'
import Workout from '../Assets/workout.svg'
import Bmi from '../Assets/bmi.svg'
const Services =()=>{
    const theme = localStorage.getItem("theme");
    return(
        <div className={`services ${theme}`}>
            <h1>Our Services</h1>
            <div className='container'>
                <ServiceItem img={Activity} title='Activity Log' desc='Keep a record of your steps, sleep and water every day.'></ServiceItem>
                <ServiceItem img={Meal} title='Meal Tracker' desc='Add your meals and see how many calories you eat.'></ServiceItem>
                <ServiceItem img={Workout} title='Workout Plans' desc='Save your exercise routines and follow them each week.'></ServiceItem>
                <ServiceItem img={Bmi} title='BMI Calculator' desc='Check your BMI quickly using your weight and height.'></ServiceItem>
            </div>
        </div>
    )
}
export default Services;
