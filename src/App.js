import './App.css';
//npm install react-router-dom para instalar router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import MascotaTabla from './Components/MascotaTabla';
import Mascotas from './Components/Mascotas'
import Galeria from "./Components/Galeria"
function App() {
return (

    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>      
        {/* <Route exact path='/person' element={<PersonPage />}/> */}
        <Route exact path='/pet' element={<Mascotas/>}/>
        <Route exact path="/calc" element={<MascotaTabla/>}/>
        <Route exact path="/gal" element={<Galeria/>}/>
      </Routes>
    </Router>

   
     
  );
}

export default App;
