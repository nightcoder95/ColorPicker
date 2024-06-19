import { useState } from 'react'
import './Hero.css'

function Hero() {
    const [image, setImage] = useState(null)
    const [color, setColor] = useState(null)
    
    function handleImageChange(event){
        setImage(event.target.files[0])
    }

    function loadEyeDropper() {
        const eyeDropper = new window.EyeDropper();
        eyeDropper.open()
        .then(result => {
            setColor(result.sRGBHex)
            console.log(color)
          })
        .catch(error => console.error)
    }
    

  return (
    <div className='hero'>
        <main>
            <div className="left">
                <img src={image? URL.createObjectURL(image): '../../../public/vite.svg'} alt="" onMouseEnter={loadEyeDropper}/>
                <button className='selectImage' >
                    <input type="file" name="" id="" onChange={handleImageChange}/>Select Image
                </button>
                
            </div>
            <div className="right">
                <div className="colorCard" style={{backgroundColor:color}}>

                </div>
                <p>
                    {color||"#4f4f4f"}
                </p>
            </div>
        </main>
    </div>
  )
}

export default Hero