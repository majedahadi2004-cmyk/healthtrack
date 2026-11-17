import '../Styles/Calculate.css'
import {useState} from 'react'
const Calculate =()=>{
    const theme = localStorage.getItem("theme");
    const [state,setState]= useState({weight:"",height:""});
    const [bmi,setBmi]= useState("");
    const [status,setStatus]= useState("");

    const handleChange=(e)=>
        {
        const value = e.target.value;
        const name = e.target.name;
        setState({...state,[name]:value})
        }

    const handleSubmit=(e)=>
        {
            e.preventDefault();
            if(state.weight === "" || state.height === "")
            {
                alert("Please enter your weight and height");
                return;
            }
            let h = state.height / 100;
            let result = state.weight / (h * h);
            setBmi(result.toFixed(1));

            if(result < 18.5)
                setStatus("Underweight");
            else if(result < 25)
                setStatus("Normal weight");
            else if(result < 30)
                setStatus("Overweight");
            else
                setStatus("Obese");
        }

    return(
        <div className={`calculate ${theme}`}>
            <h1>BMI Calculator</h1>
            <form>
                <label htmlFor="weight">Weight (kg)</label>
                <input type="number" name='weight'
                placeholder="Enter your weight"
                onChange={handleChange}></input>

                <label htmlFor="height">Height (cm)</label>
                <input type="number" name='height'
                placeholder="Enter your height"
                onChange={handleChange}></input>

                <button type="submit" onClick={handleSubmit}>Calculate</button>
            </form>
            <h2>{bmi !== "" && "Your BMI is " + bmi}</h2>
            <h2>{status}</h2>
        </div>
    )
}
export default Calculate;
