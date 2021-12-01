// CÃ³digo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perÃ­metro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El Ã¡rea del cuadrado es: " + areaCuadrado + "cmË†2");
console.groupEnd();

// CÃ³digo del triÃ¡ngulo
console.group("TriÃ¡ngulos");

// const alturaTriangulo = 5.5;
// console.log("La altura del triÃ¡ngulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perÃ­metro del triÃ¡ngulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El Ã¡rea del triÃ¡ngulo es: " + areaTriangulo + "cmË†2");

console.groupEnd();

// CÃ³digo del cÃ­rculo
console.group("CÃ­rculos");

// DiÃ¡metro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Ãrea
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


 

function calcularPerimetro() {
  const caja = document.getElementById("cuadrado");
  const value = caja.value;
  const perimetro = perimetroCuadrado(value);
  document.getElementById("res").value = perimetro;
}

function calcularArea() {
  const caja = document.getElementById("cuadrado");
  const value = caja.value;
  const area = areaCuadrado(value);
  document.getElementById("res").value = area;
}