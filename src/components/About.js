


// import React, { useState } from 'react'


export default function About(props) {
    // const [myStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white'
    //     });

    let myStyle = {
        color: props.mode==="dark"?"white":"#042743",
        backgroundColor: props.mode==="dark"?"#042743":"white",
    }        
  return (
    <div className="container">
        <h2 className="my-4"  style={{color: props.mode==="dark"?"white":"#602eb2"}}>About Us</h2>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>Text Counter App </strong>gives you a way to analyze your text quickly and effeciently. Be it word count, character count or space count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Text Counter App </strong>is a free <strong>character counter</strong> tool that provides instant strong <strong>counter  count & word count</strong> statistics for a given text. <strong>Text Counter App </strong>reports the number of strong <strong>counter and character.</strong> Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               This word counter software works in any web browsers such as <strong>Chrome, Firedox, Internet Explorer, Safari, Opera.</strong> It suits to count characters in <strong>Facebook, Blog, Excel Documents, Pdf Document, Essays, etc.</strong> 
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}
