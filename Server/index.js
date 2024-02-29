const  express = require('express');
const app = express();
const mysql = require('mysql');
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
    database: 'Usuario',

});


app.post("/create",(req, res)=>{
    const Identificacion = req.body.identificacion;
    const Tipo_identificacion = req.body.Tipo_identificacion;
    const P_nombre = req.body.P_nombre;
    const S_nombre = req.body.S_nombre;
    const P_apellido = req.body.P_apellido;
    const S_apellido = req.body.S_apellido;
    const Email = req.body.Email;
    const Telefono = req.body.Telefono;
    const Direccion = req.body.Direccion;
    const Ocupacion = req.body.Ocupacion;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const foto = req.body.foto;

    db.query('INSERT INTO Informacion_personal (Identificacion, Tipo_identificacion, P_nombre, S_nombre, P_apellido, S_apellido, Direccion, Email, Telefono, Ocupacion, F_nacimiento, Foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [Identificacion, Tipo_identificacion, P_nombre, S_nombre, P_apellido, S_apellido, Direccion, Email, Telefono, Ocupacion, fecha_nacimiento, foto],
    
    (err,result)=>{
        if(err){
            console.log('error al insertar en la bd',err);
            return res.status(500).send('error del servidor');

        }else{
            res.send('Usuario registrado exitosamente');
            res.status(200).send('ok');
        }
    }
    )
});


app.listen(3001, ()=>{
    console.log('puerto 3001 en ejecucion');
})


