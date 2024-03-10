import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Listar from './Components/Listar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    Identificacion: '',
    Tipo_Identificacion: '',
    P_Nombre: '',
    S_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Email: '',
    Telefono: '',
    Direccion: '',
    Ocupacion: '',
    Fecha_Nacimiento: '',
    Foto: ''
  });

  const [mostrarListar, setMostrarListar] = useState(false);

  const handleListarClick = () => {
    setMostrarListar(!mostrarListar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    let updatedValue = value;
  
    // Validar la fecha de nacimiento y determinar el tipo de identificación
    if (name === 'Fecha_Nacimiento') {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
  
      if (age < 7) {
        updatedValue = 'R.C';
      } else if (age >= 7 && age < 18) {
        updatedValue = 'T.I';
      } else if (age >= 18) {
        updatedValue = 'C.C';
      }
    }
  
    // Actualizar el estado con el valor actualizado
    setFormData(prevState => ({
      ...prevState,
      [name]: updatedValue
    }));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const ADD = () => {
    Axios.post("http://localhost:3001/create", formData)
      .then(() => {
        alert('Registrado con éxito');
      })
      .catch(error => {
        console.error('Error al registrar:', error);
      });
  };

  return (
    <Router>
      <div onSubmit={handleSubmit}>

        <label htmlFor="identificacion">Identificacion:</label>
        <input
          type="number"
          id="identificacion"
          name="Identificacion"
          value={formData.Identificacion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="tipoIdentificacion">Tipo de Identificacion:</label>
        <select
          id="Tipo_Identificacion"
          name="Tipo_Identificacion"
          value={formData.Tipo_Identificacion}
          onChange={handleChange}
          className="form-input"
        >
          <option value="" disabled>Selecciona un tipo de identificación</option>
          <option value="T.I">Tarjeta de identidad</option>
          <option value="C.C">Cedula de Ciudadania</option>
          <option value="R.C">Registro Civil</option>
        </select>

        <label htmlFor="primerNombre">Primer nombre:</label>
        <input
          type="text"
          id="primerNombre"
          name="P_Nombre"
          value={formData.P_Nombre}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="segundoNombre">Segundo nombre:</label>
        <input
          type="text"
          id="segundoNombre"
          name="S_Nombre"
          value={formData.S_Nombre}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="primerApellido">Primer apellido:</label>
        <input
          type="text"
          id="primerApellido"
          name="P_Apellido"
          value={formData.P_Apellido}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="segundoApellido">Segundo apellido:</label>
        <input
          type="text"
          id="segundoApellido"
          name="S_Apellido"
          value={formData.S_Apellido}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="telefono">Telefono:</label>
        <input
          type="number"
          id="telefono"
          name="Telefono"
          value={formData.Telefono}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="direccion">Direccion:</label>
        <input
          type="text"
          id="direccion"
          name="Direccion"
          value={formData.Direccion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="ocupacion">Ocupacion:</label>
        <input
          type="text"
          id="ocupacion"
          name="Ocupacion"
          value={formData.Ocupacion}
          onChange={handleChange}
          className="form-input"
        />

        <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          name="Fecha_Nacimiento"
          value={formData.Fecha_Nacimiento}
          onChange={handleChange}
          className="form-input"
          required

        />

        <label htmlFor="foto">Foto:</label>
        <input
          type="file"
          id="foto"
          name="Foto"
          accept="image/*"
          onChange={handleChange}
          className="form-input"
        />
        <button onClick={ADD}>Registrar</button>


      </div>

      <div>
        <Link to="/listar"></Link>
        <button onClick={handleListarClick}>Mostrar/Ocultar Listar</button>
      </div>


      <Routes>
        <Route path="/listar" element={<Listar />} />
      </Routes>


      {mostrarListar && <Listar />}

    </Router>

  )
}
export default App;
