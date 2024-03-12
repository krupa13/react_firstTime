import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }

        console.log(this.props.name + "Child Component");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/krupa13");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    // componentDidMount() {
    //     // this.timer = setInterval(() => {
    //     //     console.log("set Interval did mount");
    //     // }, 1000)
    // }

    // componentWillUnmount() {
    //     // clearInterval(this.timer)
    //     console.log("component will mount");
    // }

    render() {

        // const {name, location} = this.props;

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-details">
                <img src={avatar_url}/>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: krupa13</h3>
            </div>
        )
    }
}

export default UserClass;