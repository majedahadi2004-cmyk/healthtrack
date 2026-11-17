import '../Styles/Tracker.css'
import {useEffect, useState} from 'react'
const Tracker =()=>{
    const theme = localStorage.getItem("theme");
    const [state,setState]= useState({type:"Activity",name:"",amount:""});
    const [list,setList]= useState(()=>JSON.parse(localStorage.getItem("entries")) || []);

    useEffect(()=>{
        localStorage.setItem("entries",JSON.stringify(list));
    },[list])

    const handleChange=(e)=>
        {
        const value = e.target.value;
        const name = e.target.name;
        setState({...state,[name]:value})
        }

    const handleSubmit=(e)=>
        {
            e.preventDefault();
            if(state.name === "" || state.amount === "")
            {
                alert("Please fill all the fields");
                return;
            }
            const entry = {
                id: Date.now(),
                type: state.type,
                name: state.name,
                amount: state.amount,
                date: new Date().toLocaleDateString()
            };
            setList([entry, ...list]);
            setState({...state,name:"",amount:""});
        }

    const handleDelete=(id)=>
        {
            setList(list.filter((item)=> item.id !== id));
        }

    const getUnit=(type)=>
        {
            if(type === "Meal")
                return "calories";
            else
                return "minutes";
        }

    return(
        <div className={`tracker ${theme}`}>
            <h1>My Daily Tracker</h1>
            <p>Log your activities, meals and exercise.</p>

            <form>
                <label htmlFor="type">Type</label>
                <select name='type' value={state.type} onChange={handleChange}>
                    <option>Activity</option>
                    <option>Meal</option>
                    <option>Exercise</option>
                </select>

                <label htmlFor="name">What did you do / eat?</label>
                <input type="text" name='name' value={state.name}
                placeholder="Example: Walking, Chicken salad, Push ups"
                onChange={handleChange}></input>

                <label htmlFor="amount">Amount ({getUnit(state.type)})</label>
                <input type="number" name='amount' value={state.amount}
                placeholder={"Enter " + getUnit(state.type)}
                onChange={handleChange}></input>

                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>

            <h2>My Entries</h2>
            {list.length === 0 && <p>No entries yet.</p>}
            <div className='entries'>
                {list.map((item)=>(
                    <div className={`entry ${item.type}`} key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.type} - {item.amount} {getUnit(item.type)} - {item.date}</p>
                        </div>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tracker;
