import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@localhost:5432/dbname');

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

// Definir las relaciones
Medico.belongsTo(Especialidad);
Medico.hasMany(Consulta);
Consulta.belongsTo(Paciente);
Medico.hasMany(Licencia);
Licencia.belongsTo(Paciente);

// Sincronizar los modelos con la base de datos
sequelize.sync();
