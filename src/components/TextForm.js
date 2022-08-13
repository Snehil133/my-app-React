

import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }

  const handleLowClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to lower case","success")
  }

  const handleClearClick = () => {
    let newText1 = "";
    setText(newText1);
    props.showAlert("Text Cleared","success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Successfully to Clipboard","success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join (" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>


    <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h1 className= "mb-2">{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"rgb(10 38 60)":"white", color:"dark"?"black":"#042743"}} id="myBox" rows="8"/>
    </div>


    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>


    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}} >
     <h2>Enter Your Text</h2>
     <b><p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length} Words || {text.length} Characters</p></b>
     <b><p>{0.008 * text.split (" ").filter((element)=>{return element.length!==0}).length} Total reading time</p></b> 
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
