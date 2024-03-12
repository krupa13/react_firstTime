import UserClass from "./UserClass";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { render } from "react-dom";

class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Component!!</h1>
                <h2>This is Namaste React Series.</h2>
    
                <UserClass name={"First"} location={"Pathapatnam"}/>
            </div>
        )
    }
}

export default About;