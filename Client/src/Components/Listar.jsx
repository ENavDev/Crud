import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Listar = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
       
        const getUsers = () => {
            Axios.get("http://localhost:3001/Usuarios")
                .then((response) => {
                    setUsersList(response.data);
                })
                .catch((error) => {
                    console.error("Error al obtener los usuarios:", error);
                });
        };

        getUsers(); 

    }, []); 
    return (
        <div className='list'>
            <table>
                <thead>
                    <tr>
                        <th>Identificación</th>
                        <th>Tipo de Identificación</th>
                        <th>Primer Nombre</th>
                        <th>Segundo Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Ocupación</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Identificacion}</td>
                            <td>{user.Tipo_identificacion}</td>
                            <td>{user.P_nombre}</td>
                            <td>{user.S_nombre}</td>
                            <td>{user.P_Apellido}</td>
                            <td>{user.S_Apellido}</td>
                            <td>{user.Email}</td>
                            <td>{user.Telefono}</td>
                            <td>{user.Direccion}</td>
                            <td>{user.Fecha_Nacimiento}</td>
                            <td>{user.Ocupacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listar;
