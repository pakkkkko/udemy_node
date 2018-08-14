//Requires
const fs = require('fs');


let crearArchivo = ((base, limit)  => {
  return new Promise ((resolve, reject) => {
    
    if(!Number(base))
      return reject(`El valor introducido ${base}, no es un número`);

    if(!Number(limit))
      return reject(`El valor introducido ${lmit}, no es un número`);

    let content = '';
    let file = `tablas/tabla-${base}.txt`;

    for(let i = 1; i<=limit;  i++ ){
      content += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(file, content, (err) => {
      if (err) 
        return reject(err);

      resolve(file);
    });
    
  });
});


module.exports = {
  crearArchivo
};
