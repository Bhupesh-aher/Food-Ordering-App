import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
            },
        };
        console.log(this.props.name+"child Constructor"); 
    }

    async componentDidMount(){
        console.log(this.props.name+"child component Did Mount");
        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render(){
        
        console.log(this.props.name+"child render")
        const{name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src="https://avatars.githubusercontent.com/u/12824231?v=4"/>
                 <h2>Name: {name}</h2>
                <h2>Location : {location}</h2>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        ); 
    }
}

export default UserClass; 