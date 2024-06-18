import './Palette.css'

function Palette() {
  return (
    <div className='palette'>
        <h2>Recommended for you</h2>
        <section>
            <div className='left'>
                <p>Dark Saphire Blue</p>
            </div>
            <div className="right">
                <div className='hex a' style={{color: "red"}}></div>
                <div className="hex b"></div>
                <div className="hex c"></div>
                <div className="hex d"></div>
            </div>
        </section>
        <section style={{marginBottom:'50px'}}>
            <div className='left'>
                <p>Dark Avacoda Green</p>
            </div>
            <div className="right">
                <div className='hex e' style={{color: "red"}}></div>
                <div className="hex f"></div>
                <div className="hex g"></div>
                <div className="hex h"></div>
            </div>
        </section>
    </div>
  )
}

export default Palette