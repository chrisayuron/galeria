import Pet from './PetsC'
import mascotas from '../assets/mascotas'
import NavBar from './NavBar';
import { useState } from 'react';


function Mascotas(){
    const [comidaCalculada, setComidaCalculada] = useState('');
    return (
        <div>
          <NavBar></NavBar>
          <h1>MASCOTAS</h1>
          <h2 className='titulo-calculo'>Cuanto alimento requiere tu mascota?</h2>
          <p className='resultado' title='Haz click en calcular y descubrelo'>Cant. comida necesaria: <span>{comidaCalculada}</span> / dia</p>
          <br />
          <div className='content mascotas'>
          {
          mascotas.map(mascota=> <Pet 
            key={mascota.id} //Identificar a cada elemento en forma única
            mascota={mascota}
            setComidaCalculada={setComidaCalculada} //se envia a cada instancia como una prop llamada setComidaCalculada
            />)
        }
        </div>
        </div>
      );
}

export default Mascotas