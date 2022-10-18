import React, {useState} from "react";

const Saludo = () => {

    const [saludo, setSaludo] = useState(false);
    
    function showTime(){
        var myDate = new Date();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        if (hours < 10) hours = 0 + hours;
        
        if (minutes < 10) minutes = "0" + minutes;
        
        if (seconds < 10) seconds = "0" + seconds;
        
        document.getElementById("HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
        //setTimeout("showTime()", 1000);
    }
    showTime();

    return(
        <>
        {`hora actual: ${Date().toString()}`}
        </>
    )
}

export default Saludo;