import React, { useState } from 'react'

export default function Textform(props) {
    const [text,settext] = useState("Enter text here");
    // text="new text"; //wrong way to update state
    // settext("new text"); //correct way to change state
    const handleUpclick =()=>{
        console.log("button clicked" + text);
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const handleLoclick =()=>{
        console.log("button clicked" + text);
        let newtext=text.toLowerCase();
        settext(newtext);
    }
    const handleOnchange =(event)=>{
        console.log("On change");
        settext(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label for="my-box" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode==="dark"?"grey":"white",color : props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoclick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3" style={{color : props.mode==="dark"?"white":"black"}}>
            <h1>Your Text Summary</h1>
            <p>no of words {text.split(" ").length-1} and no of characters is {text.length-1}</p>
            <p>Time to read above text is {0.008*(text.split(" ").length-1)}</p>
        </div>
        </>
    )
}
