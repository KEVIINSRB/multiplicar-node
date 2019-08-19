const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
	for (let i = 1;i <= limite; i++) {
		console.log(`${base} * ${i} = ${base * i}`);
	}
}



let crearArchivo = (base, limite = 10) =>{

	if (!Number(base)) {
		reject(`EL valor ${base} no es un numero`);
		return;
	}

	return new Promise((resolve, reject) =>{

		let data = '';
		for (var i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i} \n`;
		}

		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
		  if (err) reject(err)
		  else
		  	 resolve(`tabla-${base}.txt`)
		  console.log(`The archivo tabla-${base} ha sido creado`);
		});
	});
}
 
module.exports = {
	crearArchivo,
	listarTabla
}