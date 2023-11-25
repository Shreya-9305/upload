import React, {useState} from 'react'


export default function TextForm(prop) {

  // *****CUSTOM FUNCTIONS*******//


  // function Upclick(){
    //  console.log("this way to write function also works")
// }


// button
const Upclick = ()=>{

  console.log("uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
}



// text-area
const MethodOnChange = (event)=>{

  console.log("onchanged attribute method");
setText(event.target.value);
// this allows us to add text to text area.
}



// **************STATES**************************//

  const [text, setText] = useState('Enter text here(state)');
//use this inside the function

// setText("new text");
// correct way to change the state



// ********RENDERER***************//

  return (
  <div>

      <h1>{prop.heading}</h1>

      {/* here we are setting props for this element. */}


    <div className="mb-3 my-3" > 

       <textarea className="form-control" value={text}
       onChange={MethodOnChange} id="myBox" 
       rows="8"></textarea>

       {/* here we are setting state for this element. */}


    </div>

       <button className="btn btn-primary" onClick={Upclick}>Change to uppercase</button>

      {/* we set up a click function here that is defined above */}

  </div> 


  )
}
