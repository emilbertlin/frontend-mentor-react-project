import Hamburger from '../images/icon-hamburger.svg'
import '../styles/Nav.css'

const Nav = () => {
  return (
      <>
      <div className='nav'>
        <div className="wrapper">
          <div className="logo">
            room
          </div>
          <ul>
            <li><span>Home</span></li>
            <li><span>Shop</span></li>
            <li><span>About</span></li>
            <li><span>Contact</span></li>
          </ul>
        </div>
      </div>
      <div className="mobileNav">
        <img src={Hamburger} alt="" className="burger" />
      </div>
    </>
  )
}

export default Nav
