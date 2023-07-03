function Producto(props){
    const producto=props.producto
    return(
      <div  className='content-products'>
      <img className="foto-product" src={producto.foto}/>
      <p>{producto.nombre}</p>
      <p>{producto.descripcion}</p>
      </div>


      
    );
    
  }

  export default Producto