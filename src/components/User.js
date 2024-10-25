import { useState } from "react";


const User = (props) => {
    const [count, setCount] = useState(0);
    

    const{name} = props;
    
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 =  {count2}</h1>

            <h2>Name:{name}</h2>
            <h2>Location : Dehradun</h2>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;