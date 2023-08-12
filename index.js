import { Sequelize, DataTypes } from "sequelize";
//Hay que dar los datos de la conexion
//hay dos o tres formas para crear la conexion
const sequelize = new Sequelize("grupal5", "postgres", "pipe1234", {host:"localhost", dialect: "postgres"})

//aca creamos tablas
const Medico = sequelize.define('Medico', {
  nombre: DataTypes.STRING,
  rut: DataTypes.STRING,
  direccion: DataTypes.STRING,
});

const Especialidad = sequelize.define('Especialidad', {
  codigo: DataTypes.STRING,
  descripcion: DataTypes.STRING,
});

const Paciente = sequelize.define('Paciente', {
  nombre: DataTypes.STRING,
  rut: DataTypes.STRING,
  direccion: DataTypes.STRING,
});

const Consulta = sequelize.define('Consulta', {
  fecha: DataTypes.DATE,
  horaAtencion: DataTypes.TIME,
  numeroBox: DataTypes.INTEGER,
});

const Licencia = sequelize.define('Licencia', {
  codigo: DataTypes.STRING,
  diagnostico: DataTypes.STRING,
  fechaInicio: DataTypes.DATE,
  fechaTermino: DataTypes.DATE,
});

// Definir las relaciones aca debemos dejarlo mas claro
Medico.belongsTo(Especialidad); // es una a una Bien   pertenece a 
Medico.hasMany(Consulta);  // una a muchas Bien        tiene muchas 
Consulta.belongsTo(Paciente);  // una es a una Bien    pertenece a  
Medico.hasMany(Licencia);  // uno a muchos Bien        tiene muchas 
Licencia.belongsTo(Paciente); // uno a uno Bien        pertenece a

// Entidad1.hasOne(Entidad2);   has one


// Sincronizar los modelos con la base de datos
sequelize.sync();
