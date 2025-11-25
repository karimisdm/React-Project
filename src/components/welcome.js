import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"

const Welcome = ()=>{

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("show-welcome"));
        setVisible(data === null ? true: data)
    },[])
    
    const [visible, setVisible] = useState();
    const handleWelcoming = ()=>{
        setVisible(false);
        localStorage.setItem("show-welcome", JSON.stringify(false));
    }
    return(
        <React.Fragment>
        {visible && (

        <div className="container">
            <div className="bg-primary text-white my-1 rounded">
                <FontAwesomeIcon icon={faClose} style={{float:"right", margin: "5px"}}
                onClick={handleWelcoming}/>
                <div className="p-4"> Welcome to Online Shop</div>

            </div>
        </div>
        )}
       </React.Fragment>
    )

}
export default Welcome;