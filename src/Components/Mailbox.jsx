import React, {useState} from "react";

function Mailbox (props){

    const [leido, setLeido] = useState(false);



    return(
        <>
        <div>
            <h1>
                Mensajes no leidos
            </h1>

            
            <div className="container">
                <div className="punto"></div>
            </div>
        </div>
        </>
    )
}

export default Mailbox;