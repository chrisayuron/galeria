import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"

function Galeria() {
  const [carga, setCarga]=useState(false)
  const [photos, setPhotos] = useState([])
  const [palabra, setPalabra]=useState("gato")
  const [cantidad, setCantidad]=useState(5)

  async function traerFotos(){
    const response = await fetch(`https://api.pexels.com/v1/search?query=${palabra}&per_page=${cantidad}&page=1`, {
      headers: {
        Authorization: 'DiPPxShrWYfrTkggKCcTYDWXxsybNpKAIzYEp82yjxEMBwK9An77mwmy'
      }
    });
    const data = await response.json()
    setPhotos(data.photos);
    setCarga(false)
  };

  useEffect(() => {
    traerFotos() 
  },[carga]);

function obtenerPalabra(e){
  setPalabra(e.target.value)
}
function obtenerCantidad(e){
  setCantidad(e.target.value)
}

function hacerBusqueda(){
  setCarga(true)
}


  return (
    <div>
    <NavBar></NavBar>
    <div className='container row'>
        <div className='mb-3 col-4'>
          <input className='form-control' onChange={obtenerPalabra} placeholder='Buscar'/>
        </div>
        <div className='mb-3 col-4'>

          <select className='form-select' onChange={obtenerCantidad}>
            <option defaultValue={cantidad}>Elige una cantidad</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
        </div>
        <div className='mb-3 col-3'>
          <button className='btn btn-success' onClick={hacerBusqueda}>Buscar</button>
        </div>
        
    </div>
        <div>
          {
            carga ? 
            <div className='d-flex justify-content-center'> 
            <div className="spinner-border" role="status"></div>
            </div>
            :null
          }
        </div>
       
      <div className='container d-flex justify-content-center gap-2 flex-wrap'>
      {photos.map((photo) => (
        <img className="image" key={photo.id} src={photo.src.medium} alt={photo.photographer} />
      ))}
       </div>
  </div>
  );
}

export default Galeria;