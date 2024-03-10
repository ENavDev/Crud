const  express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');


app.use(cors());
app.use(express.json());




// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'usuario',
    // port: '3306'

});

//crear
app.post("/create",(req, res)=>{
    const Identificacion = req.body.Identificacion;
    const Tipo_Identificacion = req.body.Tipo_identificacion;
    const P_Nombre = req.body.P_nombre;
    const S_Nombre = req.body.S_nombre;
    const P_Apellido = req.body.P_apellido;
    const S_Apellido = req.body.S_apellido;
    const Email = req.body.Email;
    const Telefono = req.body.Telefono;
    const Direccion = req.body.Direccion;
    const Ocupacion = req.body.Ocupacion;
    const Fecha_Nacimiento = req.body.Fecha_Nacimiento;
    const Foto = req.body.Foto;

    db.query('INSERT INTO Informacion_personal (Identificacion, Tipo_identificacion, P_nombre, S_nombre, P_apellido, S_apellido, Direccion, Email, Telefono, Ocupacion, F_nacimiento, Foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [Identificacion, Tipo_Identificacion, P_Nombre, S_Nombre, P_Apellido, S_Apellido, Direccion, Email, Telefono, Ocupacion, Fecha_Nacimiento, Foto], (err, result) => {
        if (err) {
            console.log('error al insertar en la bd', err);
            return res.status(500).send('Error del servidor');
        } else {
            console.log(result);
            res.status(200).send('Usuario registrado exitosamente');
        }
    });
});


//listar

app.get("/Usuarios", (req, res) => {
     db.query('SELECT * FROM informacion_personal', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: 'Error al obtener los usuarios' });
      } else {
        res.send(result);
      }
    });
  });
  


// Listar por id
// app.get("/Usuarios_id", (req, res) => {
//   db.query('SELECT * FROM Informacion_Personal WHERE cedula = ?', (err, result) => {
//       if (err) {
//           console.log(err);
//       } else {
//           res.send(result);
//       }
//   });
// });









app.listen(3001, ()=>{
    console.log('puerto 3001 en ejecucion');
})


