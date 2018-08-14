let empleados  = [{
  id :1,
  nombre :'paco',
},
{
  id :2,
  nombre :'luis',
},
{
  id :3,
  nombre :'roger',
}];

let salarios  = [{
  id :1,
  salario :1000,
},
{
  id :2,
  salario :2000,
}];

let getEmpleado = (id, callback) =>{
    let empleadoDB = empleados.find(empleado =>  empleado.id  === id);

    if(!empleadoDB)
      callback(`No existe un empleado co nel id ${id}`);
    else
      callback(null, empleadoDB)

}

let getSalario = (empleado, callback) => {
    if(!empleado)
      return callback(`Empleado no existente  ${empleado}`);

    let salario = salarios.find(salario => salario.id === empleado.id)
    if(!salario)
      return callback(`No se encontro un salario para el usuario ${empleado.nombre}`);

    return callback(null, {
      nombre:empleado.nombre, 
      salario : salario.salario
    });
}

getEmpleado(3, (err, empleado) => {
  if(err)
    return console.log(err);

  let salario = getSalario(empleado, (err, salario) => {
    if(err)
      return console.log(err);

      console.log(`El salario de  ${salario.nombre} es de  ${salario.salario}`);
  })

});


