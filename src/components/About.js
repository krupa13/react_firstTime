import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import { render } from "react-dom";
import UserContext from "../utils/UserContext";

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
                    <div className="flex">
                        <div>LoggedInUser: </div>
                        <div className="ml-1">
                            <UserContext.Consumer>
                                {({loggedInUser}) => (
                                    <h3 className="font-bold">{loggedInUser}</h3>
                                )}
                            </UserContext.Consumer>
                        </div>
                    </div>
                <h2>This is Namaste React Series.</h2>
    
                <UserClass name={"First"} location={"Pathapatnam"}/>
            </div>
        )
    }
}

export default About;