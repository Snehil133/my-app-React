

import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to lower case","success")
  }

  const handleClearClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText1 = "";
    setText(newText1);
    props.showAlert("Text Cleared","success")
  }

  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied Successfully to Clipboard","success")
  }

  // const handleExtraSpaces = () => {
  //   let newText = text.split(/[ ]+/);
  //   setText(newText.join " " )
  // }

  const handleOnChange = (event) => {
    console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>


    <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#818081":"white", color:"dark"?"black":"#042743"}} id="myBox" rows="8"/>
    </div>


    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
    
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    
    {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
    
    </div>


    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}} >
     <textForm heading = "Enter Your Text"/>
     <b><p>{text.split (" ").length} Words || {text.length} Characters</p></b>
     <b><p>{0.008 * text.split (" ").length} Total reading time</p></b> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box above to preview"}</p>
    </div>
    </>
  )
}
