// Inicio codigo para crear productos en Local Storage (crearProducto.html)

const arrayProductos = JSON.parse(localStorage.getItem('arrayProd')) || []

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const stock = document.getElementById('stock').value;
    const precio = document.getElementById('precio').value;

    const producto = {
        id: arrayProductos.length == 0 ? 1 : arrayProductos[arrayProductos.length - 1].id + 1,
        nombre: nombre,
        descripcion: descripcion,
        stock: parseInt(stock),
        precio: parseInt(precio),
    };


    arrayProductos.push(producto)

    localStorage.setItem('arrayProd', JSON.stringify(arrayProductos));

});

// Fin codigo para crear productos en Local Storage

//Inicio codigo funciones de detalle.js

const getProduct = async (id) => {
    const respuesta = await fetch('../productos.json')
    const data = await respuesta.json()
    return data.find(producto => producto.id === id)
}

export default getProduct 