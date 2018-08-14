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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado =>  empleado.id  === id);
    
    if(!empleadoDB)
      throw new Error(`No existe un empleado con el id ${id}`);

    return empleadoDB;
}


let getSalario = async(empleado) => {
  
    if(!empleado)
      throw new Error(`Empleado no existente  ${empleado}`);

    let salario = salarios.find(salario => salario.id === empleado.id);
    if(!salario)
      throw new Error(`No se encontro un salario para ${empleado.nombre}`);

    return {
      nombre:empleado.nombre, 
      salario : salario.salario
    };
}


let getInformacion = async(id) =>{
  let empleado = await getEmpleado(id);
  let salario  = await getSalario(empleado);
  return `${salario.nombre} tiene un salario de  ${salario.salario}`;
};

getInformacion(1)
  .then( mensaje  => console.log(mensaje))
  .catch( err  => console.log(err));

getInformacion(2)
  .then( mensaje  => console.log(mensaje))
  .catch( err  => console.log(err));

getInformacion(3)
  .then( mensaje  => console.log(mensaje))
  .catch( err  => console.log(err));

getInformacion(10)
  .then( mensaje  => console.log(mensaje))
  .catch( err  => console.log(err));

// 
// getEmpleado(3).then(empleado => {
//   return getSalario(empleado);
// })
// .then(salario =>{
//   console.log(salario);
// })
// .catch(err => {
//   console.log(err);
// });



