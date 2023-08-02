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
    document.getElementById('mensaje-exito').style.display = 'block';

});

// Fin codigo para crear productos en Local Storage

// Inicio codigo para mostrar productos en Local Storage

function mostrarProductos() {
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    const arrayProductos = JSON.parse(localStorage.getItem('arrayProd')) || [];

    arrayProductos.forEach(producto => {
        const productoHTML = `
            <div>
                <h3>${producto.nombre}</h3>
                <p>Descripción: ${producto.descripcion}</p>
                <p>Stock: ${producto.stock}</p>
                <p>Precio: ${producto.precio}</p>
            </div>
            <hr>
        `;
        productosContainer.innerHTML += productoHTML;
    });
}

mostrarProductos();

// Fin codigo para mostrar productos en Local Storage