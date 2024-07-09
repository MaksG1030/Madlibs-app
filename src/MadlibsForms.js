import React from "react";
//css to center the form since that bothered me
import "./MadlibsForms.css";

//Nothing I haven't done before. Passed in setWords for component comunication, passing the results of the form
// Passed in toggle to let the parent know to switch to the madlibs story

//MadlibsForms returns the form to input madlib words then changes the words state and toggles Madlibs.js's html
const MalibsForms=({setWords, toggle})=>{
    const handleSubmit=(e)=>{
        //important lesson to never forget preventDefault. That was a good ten minutes from me
        e.preventDefault();
        const formData=e.target;
        toggle(true);
        setWords({
            noun:formData.noun.value,
            noun2:formData.noun2.value,
            adjective:formData.adjective.value,
            color:formData.color.value
        });
        //Tried using this but I would need to set each input in the form as words."name of thing", but since original words is stuck in Madlibs.js I'm not doing it
        //However If I were to do the bonus sections I would try it
        // It would be easier that way since I could refactor MadlibsForms.js to generate the correct form on the fly based on the "words" I need
        // Maybe even make a smaller component to pretype the inputs and put it all in an array that the form tag will use.
        //
        // setWords(words=>({
        //     ...words,
        //     [name]:value
        // }));
    };
    //Don't need a label
    // <label htmlFor="Madlibs">MadLibs:</label>
    return(
    <form onSubmit={handleSubmit}>

        <input id="noun" name="noun" placeholder="noun"/>
        <input id="noun2" name="noun2" placeholder="noun"/>
        <input id="adjective" name="adjective" placeholder="adjective"/>
        <input id="color" name="color" placeholder="color"/>
        <button>Get Story</button>
    </form>
    );
}

export default MalibsForms;