let numero, suma: number;

suma = 0;
numero = Number(prompt("ingrese un numero del 1 al 10"));
while (numero > 0 && numero <= 10) {
  console.log(numero);
  suma = suma + numero;
  numero = Number(prompt("ingrese un numero del 1 al 10"));
}

console.log("La suma es de " + suma);
