/*
* Async Await
*/


// let getNombre = async() => {
//   return 'Fernanado '
// 
// }


let getNombre = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fernando');
    },1000);
  });
}


let saludo = async() => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
};


saludo().then((mensaje) =>{
  console.log(mensaje);
})
.catch(err => console.log(err));

