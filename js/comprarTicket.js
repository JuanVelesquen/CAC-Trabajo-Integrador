const cant = document.getElementById("cantidad");
const select = document.getElementById("categoria");
const resumen = document.getElementById("resumen");
const borrar = document.getElementById("borrar");

resumen.addEventListener("click", () =>{
    let categoria = select.value;
    let cantidad = parseInt(cant.value);
    let suma = 0;
    console.log(cantidad);
    if(cantidad == NaN){
        cantidad = 0;
    }
    if(categoria == "estudiante"){
        suma = cantidad * 200 * 0.2;
    }else if(categoria == "trainee"){
        suma = cantidad * 200 *  0.5;
    }else if(categoria == "junior"){
        suma = cantidad * 200 * 0.85;
    }
    document.getElementById("total-pagar").innerHTML = "$" + suma;
})

borrar.addEventListener("click", () =>{
    document.getElementById("cantidad").value = null;
    document.getElementById("categoria").value = "estudiante";
    document.getElementById("nombre").value = null;
    document.getElementById("apellido").value = null;
    document.getElementById("correo").value = null;
    document.getElementById("total-pagar").innerHTML = "$";
})