import NavBar from './NavBar';

import empleados from'../assets/empleados'
import productos from'../assets/productos'
import testimonios from '../assets/testimonios';
import Empleado from './Empleados'; //Importo el componente
import Producto from './Productos'
import Testimonial from './Testimonial'
import Contacto from './Contacto'

function HomePage() {
    return (
      <div>
        <NavBar></NavBar>
        <div className='content'>
        <h2>ACERCA DE NOSOSTROS</h2>
      <div className='perfiles'>
      {
      empleados.map(empleado=><Empleado key={empleado.link} empleado={empleado}/>)
      }
      </div>
      <h2>NUESTROS SERVICIOS</h2>
      <div className='productos'>
        {
          productos.map(producto=><Producto key={producto.id}  producto={producto}/>)
        }
      </div>
      <h2>QUE DICEN NUESTROS CLIENTES</h2>
      <div className='testimonios'>
        {
          testimonios.map(testimonio=><Testimonial  key={testimonio.id} testimonio={testimonio}/>)
        }
      </div>
      <h2>CONTACTANOS</h2>
      <Contacto />
      </div>
      </div>
    );
  }

  export default HomePage;
