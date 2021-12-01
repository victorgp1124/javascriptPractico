

function calcular() {
    const precio = document.getElementById("caja").value;
    const form = document.querySelector(".form");
    const descuento = 15;

    const porcentajeConDescuentos = 100 - descuento;
    const precioConDescuento = (porcentajeConDescuentos*precio)/100;
    const res = document.createElement("INPUT");
    res.value = precioConDescuento;
    form.appendChild(res);
    
}