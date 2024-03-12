import { useEffect, useState } from "react";

const User = ({name, location}) => {

    useEffect(() => {
        // const timer = setInterval(() => {
        //     console.log("use Effect set interval");
        // }, 2000);

        // return () => {
        //     clearInterval(timer);
        //     console.log("end the timer");
        // }
    }, [])

    const [count] = useState(1);
    const [count2] = useState(2);

    return (
        <div className="user-details">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: krupa13</h3>
        </div>
    );
}

export default User;