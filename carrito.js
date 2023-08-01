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
    <button id="eliminarDelCarrito"> Eliminar del carrito </button>
    `
    renderizarCarrito.append(prodsCart)
    prodsCart.classList.add('prodsCart')

})
let boton = document.querySelector('#eliminarDelCarrito')
boton.addEventListener('click', () => eliminarDelCarrito(prod))

const eliminarDelCarrito = (nombreProd) => {
    nuevoCarrito = carrito.filter(item => item.nombre !== nombreProd)
    console.log(nuevoCarrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}
const total = document.createElement('p')
total.innerHTML = ` Total Carrito : ${totalCarrito}`
renderizarCarrito.append(total)






