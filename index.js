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
            <a href=./html/detalle.html?id=${producto.id}> detalle </a>
            <br>
            `
            contenedorProductos.append(card)
            card.classList.add('card')
        })
    })
