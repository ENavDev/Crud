import { useState, useEffect } from 'react'
import './App.css'
import Axios from "axios";


function App() {

  const [showUsers, setShowUsers] = useState(false);


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



  //validadciones de edad y tipo de documento
    const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'Fecha_Nacimiento') {
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      if (age < 7) {
        setFormData(prevState => ({
          ...prevState, 'Tipo_Identificacion': 'R.C'
        }));
        alert('eres menor de 7');
      } else if (age >= 7 && age < 18) {
        setFormData(prevState => ({
          ...prevState, 'Tipo_Identificacion': 'T.I'
        }));
        alert('eres menor de edad');
      } else if (age >= 18) {
        setFormData(prevState => ({
          ...prevState, 'Tipo_Identificacion': 'C.C'
        }));
        alert('eres mayor');
      }
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const [UsersList, setUsers] = useState([]);

  const ADD = () => {
    Axios.post("http://localhost:3001/create", {
      Identificacion: formData.Identificacion,
      Tipo_identificacion: formData.Tipo_Identificacion,
      P_nombre: formData.P_Nombre,
      S_nombre: formData.S_Nombre,
      P_apellido: formData.P_Apellido,
      S_apellido: formData.S_Apellido,
      Email: formData.Email,
      Telefono: formData.Telefono,
      Direccion: formData.Direccion,
      Ocupacion: formData.Ocupacion,
      Fecha_Nacimiento: formData.Fecha_Nacimiento,
      Foto: formData.Foto,
    }).then(() => {
      alert('Registrado con exito');

    })
  }

  

  const  GetUsuarios = () => {
    Axios.get("http://localhost:3001/Usuarios")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }

  useEffect(() => {
    if (showUsers) { // Solo obtiene los usuarios si showUsers es true
      GetUsuarios();
    }
  }, [showUsers]);

  const handleShowUsers = () => {
    setShowUsers(true); // Cambia el estado para mostrar la lista de usuarios
  }
 



  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
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
 



    
       <div className='list'>
        <button onClick={GetUsuarios}>Listar Usuarios</button>
        
        {UsersList.length > 0 && (
  <table>
    <thead>
      <tr>
        <th>Identificación</th>
        <th>Tipo de Identificación</th>
        <th>Primer Nombre</th>
        <th>Primer Apellido</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>fecha de nacimiento</th>
        <th>Ocupacion</th>
        {/* Agrega el resto de las propiedades del usuario aquí */}
      </tr>
    </thead>
    <tbody>
      {UsersList.map((user, index) => (
        <tr key={index}>
          <td>{user.Identificacion}</td>
          <td>{user.Tipo_identificacion}</td>
          <td>{user.P_nombre}</td>
          <td>{user.P_Apellido}</td>
          <td>{user.Email} </td>
          <td>{user.Telefono}</td>
          <td>{user.Fecha_Nacimiento}</td>
          <td>{user.Ocupacion}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
)}




      </div>
      </form>
    </div>
  );
}

export default App
