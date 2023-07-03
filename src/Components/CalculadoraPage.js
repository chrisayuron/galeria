import { useState } from 'react';

function CalculadoraPage() {
    const [peso, setPeso]=useState('')
    const [resultado, setResultado]=useState(0)
    function Calcular(){
        const valor=peso*1000*0.025
        setResultado(valor)
        console.log(valor)
    }

    function capturarPeso(e){
        setPeso(e.target.value)
    }

    return (
      <div>
        <div className='content'>
        <h1> CALCULADORA DE COMIDA PARA MASCOTA</h1>
        <label id='peso'>Peso </label>
        <input type='text' value={peso} id='peso'  onChange={capturarPeso} placeholder='Escribe peso mascota'/>        <br/>
        <button onClick={Calcular}>Calcular</button>
        <label id='resultado'>{resultado} gr de comida / dia</label>
        </div>
      </div>
    );
  }

  export default CalculadoraPage;
