import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

const Welcome = ()=>{
    
    const [visible, setVisible] = useState(true);
    const handleWelcoming = ()=>{
        setVisible(false);
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