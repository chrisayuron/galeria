import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Acerca de</Link>
        </li>
        <li>
          <Link to="/">Servicios</Link>
        </li>
        <li>
          <Link to="/">Testimonios</Link>
        </li>
        <li>
          <Link to="/">Contactanos</Link>
        </li>
        <li>
          <Link to="/person">Personas</Link>
        </li>
        <li>
          <Link to="/pet">Mascotas</Link>
        </li>
        <li>
          <Link to="/calc">Mascota Tabla</Link>
        </li>
      </ul>
    </nav>
  );
}


export default NavBar;