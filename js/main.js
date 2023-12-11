const datos = {
    usuario: "tomas",
    contraseña:"tomas123",
    ingreso: false,
    
}
const precioManzana = 500; 
const precioBanana = 700;
const precioNaranja = 650;
const precioSandia = 1000;

let totalCompra = 0;
let carrito = [];

function login( intentos, maximaCantidadIntentos){
    let usuarioIngresado = prompt("Ingrese su nombre")
    let usuarioLower = usuarioIngresado.toLocaleLowerCase()
    let constraseñaIngresada = prompt("Ingrese su contraseña")
    if((datos.usuario === usuarioLower)&&(datos.contraseña === constraseñaIngresada)){
        alert("Bienvenido")
        datos.ingreso=true
        realizarCompra()
        return true

    } else {
        alert(`Le quedan ${maximaCantidadIntentos-(intentos+1)} intentos`)
    }
}

function loginLoop(intentos, maximaCantidadIntentos){   
    do{
        if(login(intentos, maximaCantidadIntentos)){
            break 
        } 
        intentos++
    } while(intentos < maximaCantidadIntentos)
}



function realizarCompra() {
            alert("Menú de Compras:\n1. Manzana - $500\n2. Plátano - $700\n3. Naranja - $650\n4. Sandia - $1000");

           
        while (true) {
            let opcion = parseInt(prompt("Menú de Compras:\n1. Manzana - $500\n2. Plátano - $700\n3. Naranja - $650\n4. Sandia - $1000" + "\nIngrese el número del producto que desea comprar (0 para finalizar):"));

                
            if (opcion === 0) {
                break;
            } else if (opcion >= 1 && opcion <= 4) {
                let cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));

                    
                if (cantidad > 0) {
                        
                    switch (opcion) {
                        case 1:
                            carrito.push({ producto: "Manzana", cantidad: cantidad, precioUnitario: precioManzana });
                            break;
                        case 2:
                            carrito.push({ producto: "Plátano", cantidad: cantidad, precioUnitario: precioBanana });
                            break;
                        case 3:
                            carrito.push({ producto: "Naranja", cantidad: cantidad, precioUnitario: precioNaranja });
                            break;
                        case 4:
                            carrito.push({ producto: "Sandia", cantidad: cantidad, precioUnitario: precioSandia});
                            break
                        }
                    totalCompra += cantidad * carrito[carrito.length - 1].precioUnitario;
                } else {
                    alert("La cantidad ingresada no es válida. Inténtelo de nuevo.");
                }
                } else {
                    alert("Opción no válida. Inténtelo de nuevo.");
                }
            }

            
            alert("Resumen de la compra:");
            for (let producto of carrito) {
                alert(`${producto.cantidad} ${producto.producto}(s) - $${producto.cantidad * producto.precioUnitario}`);
            }
            alert(`Total de la compra: $${totalCompra.toFixed(2)}`);
        }

        
        

const inicializar = ()=>{
    let intentos = 0
    const maximaCantidadDeIntentos = 3
    do{
        login(intentos, maximaCantidadDeIntentos)
        if(datos.ingreso){
            
            intentos=5
        }
        intentos++
    } while(intentos<3)

    if(datos.ingreso){
        let loop = true
        do{
            selector(realizarCompra())
            loop = confirm("¿Desea continuar?")
        } while(loop)
    }
}
inicializar()