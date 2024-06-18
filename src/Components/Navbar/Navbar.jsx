import  './Navbar.css'


function Navbar() {
  return (
    <div>
        <nav>
            <div className='left'>
                <h4>ColorPicker</h4>
            </div>
            <div className="right">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>COMMUNITY</li>
                    <li>PRICING</li>
                </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar