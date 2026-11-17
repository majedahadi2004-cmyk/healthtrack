import '../Styles/Services.css'
import ServiceItem from '../Components/ServiceItem.jsx'
import Activity from '../Assets/activity.svg'
import Meal from '../Assets/meal.svg'
import Workout from '../Assets/workout.svg'
import Bmi from '../Assets/bmi.svg'

const services = [
    {id: 1, img: Activity, title: 'Activity Log', desc: 'Keep a record of your steps, sleep and water every day.'},
    {id: 2, img: Meal, title: 'Meal Tracker', desc: 'Add your meals and see how many calories you eat.'},
    {id: 3, img: Workout, title: 'Workout Plans', desc: 'Save your exercise routines and follow them each week.'},
    {id: 4, img: Bmi, title: 'BMI Calculator', desc: 'Check your BMI quickly using your weight and height.'}
];

const Services =()=>{
    const theme = localStorage.getItem("theme");
    return(
        <div className={`services ${theme}`}>
            <h1>Our Services</h1>
            <div className='container'>
                {services.map((item)=>(
                    <ServiceItem key={item.id} img={item.img} title={item.title} desc={item.desc}></ServiceItem>
                ))}
            </div>
        </div>
    )
}
export default Services;
