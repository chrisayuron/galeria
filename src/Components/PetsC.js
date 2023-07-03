// import { useState } from "react"

function Pet(props){
  const mascota=props.mascota
  function Calcular(){
   const result=mascota.peso*1000*0.025 + "gr"
    props.setComidaCalculada(result)
  }
    return (
        <div className="card mascota-card text-bg-dark mb-3">
              <h2 className="card-header text-center">ID: {mascota.id}</h2>
           <div className="card-body">
                <h5 className="card-title text-center">DATOS</h5>
                  <p className="card-text mb-0">Id dueño: {mascota.idDueno}</p>
                  <p className="card-text mb-0">Nombre: {mascota.nombre}</p>
                  <p className="card-text mb-0">Edad: {mascota.edad}</p>
                  <p className="card-text mb-0">Especie: {mascota.especie}</p>
                  <p className="card-text mb-0">Sexo: {mascota.sexo}</p>  
                  <p className="card-text mb-3">Peso: {mascota.peso}Kg</p>  
                <a href="#" className="btn btn-primary d-block" onClick={Calcular}>Calcular</a>
          </div>
        </div>
      )
}
export default Pet