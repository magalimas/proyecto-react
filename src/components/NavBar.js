import './NavBar.css'

function NavBar() {

    return (
      <div>
        <header className="nav">
            <h1>Tualmadeco</h1>
            <nav className='navFlex'>
                <li><a href="#" className='navItems'>Productos</a></li>
                <li><a href="#" className='navItems'>Nosotros</a></li>
                <li><a href="#" className='navItems'>Preguntas Frecuentes</a></li>
                <li><a href="#" className='navItems'>Contacto</a></li>
            </nav>
        </header>
      </div>
    );
  }
  
  export default NavBar;
  