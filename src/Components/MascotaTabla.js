import NavBar from "./NavBar";
import {useState} from 'react'
function MascotaTabla(){
    const [animal, setAnimal]=useState('')
    const [cantidad, setCantidad]=useState('-')
    const [alimento, setAlimento]=useState('-')
    const [peso, setPeso]=useState('-')

    const tablaConversion={
        perro:{
            nutrecan:{
                0:"",
                5:"",
                10:"",
                20:"",
                30:"",
                40:""
            },
            dogchow:{
                0:"",
                5:"",
                10:"",
                15:"",
                20:"",
                30:""
            }
        },
        gato:{
            agility:{
                0:"",
                3:"",
                5:"",
                7:"",
                10:"" 
            }
        }
    }

    function Calcular(){
        let total=''
        if(animal=='perro'){
            if(alimento=="nutrecan"){
                if(peso>40){
                    total="500+"
                } else if(peso>30){
                    total="400-500"
                } else if(peso>20){
                    total="300-400"
                } else if(peso>10){
                    total="200-300"
                } else if(peso>5){
                    total="100-200"
                } else{
                    total="50-100"
                }
            }else if(alimento=="dogchow"){
                if(peso>30){
                    total="350+"
                } else if(peso>20){
                    total="250-350"
                } else if(peso>15){
                    total="200-250"
                } else if(peso>10){
                    total="150-200"
                } else if(peso>5){
                    total="80-150"
                } else{
                    total="40-80"
                }
            }
        }else{
            if(alimento=="agiliti"){
                if(peso>10){
                    total="150+"
                } else if(peso>7){
                    total="110-150"
                } else if(peso>5){
                    total="80-110"
                } else if(peso>3){
                    total="50-80"
                } else{
                    total="30-50"
                }
        }
    }
        
        setCantidad(total)
    }
    function eleccionAnimal(e){
        const animal=e.target.value
        setAnimal(animal)
    }

    function valorPeso(e){
        const peso=e.target.value
        setPeso(peso)
    }
    function eleccionComida(e){
        const eleccion=e.target.value
        setAlimento(eleccion)
    }

    return(
        <div>
        <NavBar></NavBar>
        <h2>TABLA MASCOTA</h2>
        <p className="text-center">Elige el tipo de alimento, tipo de mascota y digita el peso. Presiona calcular</p>
        <div className="container">
        <table className="table table-striped table-bordered text-center">
            <thead>
                <tr>
                    <th>Tipo Alimento</th>
                    <th>Peso</th>
                    <th>Cantidad Diaria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{alimento}</td>
                    <td>{peso}</td>
                    <td>{cantidad}</td>
                </tr>
            </tbody>
            
        </table>
        </div>
        <div className="formulario row">
        <div className="col-6">
        <select onChange={eleccionComida} className="form-select mb-3">
            <option selected>Elige un tipo de alimento</option>
            <option value="nutrecan">NutreCan</option>
            <option value="agiliti">Agiliti</option>
            <option value="dogchow">DogChow</option>
        </select>
        </div>
        <div className="col-6">
        <select onChange={eleccionAnimal} className="form-select mb-3">
            <option selected>Elige un tipo de mascota</option>
            <option value='perro'>Perro</option>
            <option value='gato'>Gato</option>
        </select>
        </div>
        
        <div class="input-group mb-3">
        <span class="input-group-text" id="peso">Peso</span>
        <input type="text" onChange={valorPeso} class="form-control" id="peso" placeholder="Digita peso mascota" />
        </div>

        <div className="text-center">
        <button className="btn btn-lg btn-primary fw-bolder" onClick={Calcular}>Calcular</button>
        </div>
        
        </div>
        
        </div>
    )
}
export default MascotaTabla