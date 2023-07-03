
function Empleado(props){
    const empleado=props.empleado
    return(
      <div  className='content-perfil'>
      <img className="foto-perfil" src={empleado.foto}/>
      <p>{empleado.nombre}</p>
      <p>{empleado.cargo}</p>
      <a href={empleado.link} target="_blank"><img className='icon' src="https://cdn-icons-png.flaticon.com/256/174/174857.png"></img></a>
      <a href="#" target="_blank"><img className='icon' src="https://cdn-icons-png.flaticon.com/256/124/124021.png"></img></a>
      </div>


      
    );
    
  }

  export default Empleado