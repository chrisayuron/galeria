function Testimonial(props){
    const testimonio=props.testimonio
    return(
      <div  className='content-testimonio'>
        <p>{testimonio.nombre}</p>
        <div className="grupo">
        <p>{testimonio.texto}</p>
        <img className="foto-perfil" src={testimonio.foto}/> 
        </div>
      </div>
    );
  }
export default Testimonial