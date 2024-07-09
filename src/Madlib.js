import React, { useState } from "react";
import MadlibsForms from "./MadlibsForms";

//Sets up the words and toggle state
//Presents the form first then when toggled shows the story replacing words with the "words" state
const Madlibs=()=>{
    const[words,setWords]=useState({
        noun:"",
        noun2:"",
        adjective:"",
        color:""
    });
    const[toggle,setToggle]=useState(false);
    const handleSubmit=()=>{
        setToggle(false);
        //console.log(toggle);
    }
    //console.log(words);
    if(toggle){
        return(
            <div>
                <p>There was a {words["color"]} {words["noun"]} who loved a {words["adjective"]} {words["noun2"]}</p>
                <button id="restart" name="restart" onClick={handleSubmit}>Restart</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>MadLibs!</h1>
                <MadlibsForms setWords={setWords} toggle={setToggle}/>
            </div>
        );
    }
}

export default Madlibs;
