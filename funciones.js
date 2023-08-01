//Funcion para guardar productos en LocalStorage
//La comento porque vamos a usar json ahora

// const arrayProductos = JSON.parse(localStorage.getItem('arrayProd')) || []

// document.getElementById('formulario').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const nombre = document.getElementById('nombre').value;
//     const descripcion = document.getElementById('descripcion').value;
//     const stock = document.getElementById('stock').value;
//     const precio = document.getElementById('precio').value;

//     const producto = {
//         id: arrayProductos.length == 0 ? 1 : arrayProductos[arrayProductos.length - 1].id + 1,
//         nombre: nombre,
//         descripcion: descripcion,
//         stock: stock,
//         precio: precio,
//     };


//     arrayProductos.push(producto)

//     localStorage.setItem('arrayProd', JSON.stringify(arrayProductos));

// });