//Inicio codigo para traer productos de localstorage
//Lo comento porque vamos a traer de json ahora

// const productoInicial = [{
//     nombre: "Producto Inicial",
//     descripcion: "descripcion",
//     stock: 1,
//     precio: 3,
// }]

// function generarTarjetasProductos() {
//     const contenedorProductos = document.getElementById('contenedorProductos');
//     contenedorProductos.innerHTML = '';

//     const arrayProductos = JSON.parse(localStorage.getItem('arrayProd')) || productoInicial;

//     arrayProductos.forEach((producto) => {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.style.width = '18rem';


//         const cardBody = document.createElement('div');
//         cardBody.classList.add('card-body');

//         const cardTitle = document.createElement('h5');
//         cardTitle.classList.add('card-title');
//         cardTitle.textContent = producto.nombre;

//         const cardText = document.createElement('p');
//         cardText.classList.add('card-text');
//         cardText.textContent = producto.descripcion;

//         const cardButton = document.createElement('a');
//         cardButton.href = '#';
//         cardButton.classList.add('btn', 'btn-primary');
//         cardButton.textContent = 'Detalle';

//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         cardBody.appendChild(cardButton);

//         card.appendChild(cardBody);

//         contenedorProductos.appendChild(card);
//     });
// }

// window.addEventListener('DOMContentLoaded', generarTarjetasProductos);

//Fin codigo para traer productos de localstorage
const contenedorProductos = document.getElementById('contenedorProductos');
fetch('./productos.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(producto => {
            const card = document.createElement('div')
            card.innerHTML = `
            <h3> ${producto.nombre}</h3>
            <p> ${producto.descripcion}</p>
            <h4> Stock ${producto.stock}</h2>
            <h4> Precio ${producto.precio}</h4>
            <a href=/detalle.html?id=${producto.id}> detalle </a>
            <br>
            `
            contenedorProductos.append(card)
            card.classList.add('card')
        })
    })
