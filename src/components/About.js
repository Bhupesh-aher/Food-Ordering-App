import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";



class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor")
    } 

    componentDidMount(){
        // console.log("parent component Did Mount");
    }    

    
    render(){
        // console.log("parent Render");
        return(
            <div>
                <h1>About Us</h1>
                <div>
                     
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>


                </div>
                <h2>This is Namste React Web Series</h2>
                <UserClass name={"First"} location={"Deharadun (Class)"}/>
                
                 
        </div>
        )
    }
}

export default About;