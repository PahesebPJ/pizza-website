//Styles
import './Header.css'

function Header() {
  return (
    <header className="header-container">
      <img src="/src/assets/images/PizzaLogo.png" alt="Pizza Logo" className="pizza_logo"/>
      <nav className="navigation-menu-container">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/specials">Specials</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header