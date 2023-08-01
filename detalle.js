const getProduct = async (id) => {

    const respuesta = await fetch('./productos.json')
    const data = await respuesta.json()

    return data.find(producto => producto.id === id)
}

const getParamURL = (param) => {
    const urlParam = new URLSearchParams(window.location.search)
    return parseInt((urlParam.get('id')))
}

const id = getParamURL('id')

const producto = await getProduct(id) // si no le ponemos type="module" al script que conecta el html con el js, no te deja usar awaits afuera de funciones creo


const card = document.createElement('div')
card.innerHTML = `
            <h3> ${producto.nombre}</h3>
            <p> ${producto.descripcion}</p>
            <h4> Stock ${producto.stock}</h2>
            <h4> Precio ${producto.precio}</h4>
            <button id="agregarCarrito"> Agregar al carrito</button>
            `

const renderProd = document.getElementById('detalleProducto');
renderProd.append(card)
card.classList.add('card')

let boton = document.querySelector('#agregarCarrito')
boton.addEventListener('click', () => agregarAlCarrito(producto))

const agregarAlCarrito = (prod) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))

    if (carritoLS) {
        const existeIndice = carritoLS.findIndex(producto => producto.id === prod.id)
        if (existeIndice === -1) {
            prod.cantidad = 1
            carritoLS.push(prod)
        } else {
            carritoLS[existeIndice].cantidad += 1
        }
        localStorage.setItem('carrito', JSON.stringify(carritoLS))
    } else {
        producto.cantidad = 1
        localStorage.setItem('carrito', JSON.stringify([prod]))
    }
}