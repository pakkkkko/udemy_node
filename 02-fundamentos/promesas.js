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

let getEmpleado = (id) => {
  return new Promise( (resolve, reject) => {
    let empleadoDB = empleados.find(empleado =>  empleado.id  === id);
    
    if(!empleadoDB)
      return reject(`No existe un empleado con el id ${id}`);

    return resolve(empleadoDB);
  });
}


let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    if(!empleado)
      return reject(`Empleado no existente  ${empleado}`);

    let salario = salarios.find(salario => salario.id === empleado.id);
    if(!salario)
      return reject(`No se encontro un salario para ${empleado.nombre}`);

    return resolve({
      nombre:empleado.nombre, 
      salario : salario.salario
    });
  });
}


getEmpleado(3).then(empleado => {
  return getSalario(empleado);
})
.then(salario =>{
  console.log(salario);
})
.catch(err => {
  console.log(err);
});



