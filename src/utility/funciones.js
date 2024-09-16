// src/utility/funciones.js

export function obtenerProductoAleatorio(productos) {
    if (!Array.isArray(productos) || productos.length === 0) {
        // Devuelve null o un valor predeterminado si la lista es inválida o está vacía
        return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * productos.length);
    return productos[indiceAleatorio];
}
