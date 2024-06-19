import './Palette.css'
import Color from '../Color/Color';
import { useState } from 'react'

function Palette() {
    console.log(Color)
    const [isCopied, setIsCopied] = useState(false)
    function handleCopyHex(hex){
        navigator.clipboard.writeText(hex)
        .then(()=> {
            setIsCopied(true)
            timeOut()
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    function timeOut(){
        setTimeout(()=> {
            setIsCopied(false)
        }, 2000)
    }
  return (
    <div className='palette'>
        <h2>Recommended for you</h2>
        {Color.map((color, index)=> {
            return (
        <section key={index}>

            <div className='left'>
                <p>{color.groupName}</p>
            </div>
            
            <div className="right">
                <div className='hex a' onClick={()=>handleCopyHex(color.color1)} style={{backgroundColor:color.color1}}><p>{color.color1}</p></div>
                <div className="hex b" onClick={()=>handleCopyHex(color.color2)} style={{backgroundColor:color.color2}}><p>{color.color2}</p></div>
                <div className="hex c" onClick={()=>handleCopyHex(color.color3)} style={{backgroundColor:color.color3}}><p>{color.color3}</p></div>
                <div className="hex d" onClick={()=>handleCopyHex(color.color4)} style={{backgroundColor:color.color4}}><p>{color.color4}</p></div>
            </div>
        </section>
            )
        })}

        {isCopied? <p className='clipboard'>Copied to Clipboard...</p> :<></> }
    
        
    </div>
  )
}

export default Palette