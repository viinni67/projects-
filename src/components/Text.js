import React, { useState } from 'react'
export default function Text(prop) {
    const reset=()=>{
        let t=""
        setText(t)
        prop.showAlert("reseted","scucess")
    }


    const handleupchange=()=>{
        console.log("chnages are hppeneing "+text)
        let newtext=text.toUpperCase();
        setText(newtext)
        
    }
    const handleonchange=(event)=>{
        console.log("changed");
        setText(event.target.value)
    }
    const [text,setText]=useState("enetr the text");

    const [btntext,setBtntext]=useState('enable dark mode');

    const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
    })

    const toggle=()=>{
        if(myStyle.color ==='black'){
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtntext('enable light mode')
        }
        else{
            setMyStyle({
                color : 'black',
            backgroundColor : 'white'
            })
            setBtntext("enable dark mode")
        }
    }


  return (
        
        <>
       
       
        <center>
            <h1 style={myStyle}>{prop.heading}</h1>

            
        <form>
                <div className="mb-3" mystyle={myStyle}>
                    <textarea value={text}  onChange={handleonchange} rows="20" cols="90" ></textarea>
                </div>
                
                <button type='button' className="btn btn-primary me-2" onClick={handleupchange}>change to uppecase</button>
                
                <button  type="button" className="btn btn-primary " onClick={reset}>clear text</button>
            </form>
            <div className='container' mystyle={myStyle}  >
                <h3>words and characters </h3>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} character in the paragraph </p>
                <p>
                    {.008  * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes require to read 
                </p>
                



            </div>







        </center>
        
        </>
  )
}
