import { useEffect, useRef, useState } from "react";

const userOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, []);

    return onlineStatus;
}

export default userOnlineStatus;