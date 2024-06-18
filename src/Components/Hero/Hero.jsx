import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
        <main>
            <div className="left">
                <img src="../../../public/grad.jpg" alt="" />
                <button className='selectImage'>Select Image</button>
            </div>
            <div className="right">
                <div className="colorCard">

                </div>
                <p>
                    #4f4f4f
                </p>
            </div>
        </main>
    </div>
  )
}

export default Hero