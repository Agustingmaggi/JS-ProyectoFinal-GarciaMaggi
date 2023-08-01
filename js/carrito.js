let carrito = JSON.parse(localStorage.getItem('carrito'))
const renderizarCarrito = document.getElementById('renderCarrito')

let totalCarrito = 0

carrito.forEach(prod => {
    const prodsCart = document.createElement('div')
    const precioTotalPorProducto = prod.cantidad * prod.precio
    totalCarrito += precioTotalPorProducto

    prodsCart.innerHTML = `
    ${prod.nombre} <br><br>
    Cantidad: ${prod.cantidad} <br><br>
    Precio Unitario: $ ${prod.precio} <br><br>
    Precio Total : $ ${precioTotalPorProducto} <br><br>
    <button id="eliminarDelCarrito-${prod.id}"> Eliminar del carrito </button>
    <div id="mensaje"></div>
    `

    renderizarCarrito.append(prodsCart)
    prodsCart.classList.add('prodsCart')

    let boton = document.querySelector(`#eliminarDelCarrito-${prod.id}`)
    boton.addEventListener('click', () => eliminarDelCarrito(prod.nombre))
})


const eliminarDelCarrito = (nombreProd) => {
    const producto = carrito.find((produc) => produc.nombre === nombreProd)
    if (producto && producto.cantidad === 1) {
        carrito.splice(carrito.indexOf(producto), 1)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarMensaje("Eliminaste el producto en su totalidad.")
    } else if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1
        localStorage.setItem('carrito', JSON.stringify(carrito))
        mostrarMensaje("Redujiste la cantidad en 1.")
    }

}
const total = document.createElement('p')
total.innerHTML = ` Total Carrito : ${totalCarrito}`
renderizarCarrito.append(total)

const mostrarMensaje = (mensaje) => {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
};






