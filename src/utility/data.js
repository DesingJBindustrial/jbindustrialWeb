// src/utility/data.js
// src/utility/data.js

export async function cargarDatos() {
    const response = await "/data.json"; // Ruta a data.json en la carpeta public
    const data = await response.json();
    return data.productos; // Asegúrate de que esta propiedad coincida con tu JSON
}
