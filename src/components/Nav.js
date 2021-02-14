import Hamburger from '../images/icon-hamburger.svg'
import '../styles/Nav.css'

const Nav = (props) => {

  return (
      <>
      <div className='nav'>
        <div className="wrapper">
          <div className="logo">
            room
          </div>
          <ul>
            <li><span>{props.item}</span></li>
            <li><span>{props.item1}</span></li>
            <li><span>{props.item2}</span></li>
            <li><span>{props.item3}</span></li>
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
