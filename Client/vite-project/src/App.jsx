import { useState } from 'react'
import './App.css'
import Axios from "axios";


function App() {

  const [formData, setFormData] = useState({
    identificacion: '',
    tipoIdentificacion: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ocupacion: '',
    fechaNacimiento: '',
    foto: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const ADD = () => {
    Axios.post("http://localhost:3001/create", {
      identificacion: formData.identificacion,
      tipoIdentificacion: formData.tipoIdentificacion,
      primerNombre: formData.primerNombre,
      segundoNombre: formData.segundoNombre,
      primerApellido: formData.primerApellido,
      segundoApellido: formData.segundoApellido,
      email: formData.email,
      telefono: formData.telefono,
      direccion: formData.direccion,
      ocupacion: formData.ocupacion,
      fechaNacimiento: formData.fechaNacimiento,
      foto: formData.foto,
    }).then(() => {
      alert('Registrado')
    })
  }



  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="identificacion">Identificacion:</label>
        <input
          type="number"
          id="identificacion"
          name="identificacion"
          value={formData.identificacion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="tipoIdentificacion">Tipo de Identificacion:</label>
        <select
          id="tipoIdentificacion"
          name="tipoIdentificacion"
          value={formData.tipoIdentificacion}
          onChange={handleChange}
          className="form-input"
        >
          <option value="" disabled>Selecciona un tipo de identificación</option>
          <option value="T.I">Tarjeta de identidad</option>
          <option value="C.C">Cedula de Ciudadania</option>
        </select>

        <label htmlFor="primerNombre">Primer nombre:</label>
        <input
          type="text"
          id="primerNombre"
          name="primerNombre"
          value={formData.primerNombre}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="segundoNombre">Segundo nombre:</label>
        <input
          type="text"
          id="segundoNombre"
          name="segundoNombre"
          value={formData.segundoNombre}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="primerApellido">Primer apellido:</label>
        <input
          type="text"
          id="primerApellido"
          name="primerApellido"
          value={formData.primerApellido}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="segundoApellido">Segundo apellido:</label>
        <input
          type="text"
          id="segundoApellido"
          name="segundoApellido"
          value={formData.segundoApellido}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="telefono">Telefono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="direccion">Direccion:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="ocupacion">Ocupacion:</label>
        <input
          type="text"
          id="ocupacion"
          name="ocupacion"
          value={formData.ocupacion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="foto">Foto:</label>
        <input
          type="file"
          id="foto"
          name="foto"
          accept="image/*"
          onChange={handleChange}
          className="form-input"
        />
        <button onClick={ADD}>Registrar</button>
      </form>
    </div>
  );
}

export default App
