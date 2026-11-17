import '../Styles/Contact.css'
import {useState} from 'react'
const Contact =()=>{
    const theme = localStorage.getItem("theme");
    const [state,setState]= useState({fname:"",email:"",message:""});

    const handleChange=(e)=>
        {
        const value = e.target.value;
        const name = e.target.name;
        setState({...state,[name]:value})
        }

    const handleSubmit=(e)=>
        {
            e.preventDefault();
            if(state.fname === "" || state.email === "" || state.message === "")
            {
                alert("Please fill all the fields");
                return;
            }
            alert("Name: " + state.fname + "\nEmail: " + state.email + "\nMessage: " + state.message);
        }

    return(
       <div className={`contact ${theme}`}>
       <h1>Contact Us</h1>
       <form>
        <label htmlFor="fname">Full Name </label>
        <input type="text" name='fname'
        placeholder="Enter Full name"
        onChange={handleChange}></input>

        <label htmlFor="email">Email </label>
        <input type="text" name='email'
        placeholder="Enter Email"
        onChange={handleChange}></input>

        <label htmlFor="message">Message </label>
        <textarea name='message'
        placeholder="Enter Your Message"
        onChange={handleChange}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>Send</button>
       </form>
       </div>
    )
}
export default Contact;
