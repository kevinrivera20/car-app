import "./App.css";
import {  useRef ,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const obtResult = useRef(null);


  const [selectedCar, setSelectedCar] = useState("");

  const [priceCar, setPriceCar] = useState("");


 

  const handleClick = (e) => {
    setSelectedCar(obtResult.current.value);
  }



  return (
    <div className="App">
      <h3>Seleccione el vehiculo</h3>
      <select 
        class="form-select" 
        aria-label="Default select example" 
        ref={obtResult}
        >
        <option selected disabled>Vehiculo</option>
        <option value="Ford Fiesta">Ford Fiesta</option>
        <option value="Ford Focus">Ford Focus</option>
      </select>
      <br />
      <button type="button" class="btn btn-primary" onClick={handleClick}>Calcular</button>
      <br />  
      <br />
      <h1>Resultado: {selectedCar}</h1>
      <br />
      <h2>Valor del Vehiculo: {priceCar}</h2>
    </div>
  );
}

export default App;
