document.addEventListener("DOMContentLoaded", function() {
    fetch('getlaboratorios.php')
        .then(response => response.json())
        .then(data => {
            const laboratorioSelect = document.getElementById('laboratorio');
            data.forEach(laboratorio => {
                const option = document.createElement('option');
                option.value = laboratorio.codigo;
                option.textContent = laboratorio.nombre_laboratorio;
                laboratorioSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching laboratorios:', error));

    window.cotizar = function() {
        const laboratorioSelect = document.getElementById('laboratorio');
        const horasInput = document.getElementById('horas');
        const resultadoDiv = document.getElementById('resultado-cotizacion');
    
        const codigo = laboratorioSelect.value;
        const horas = parseInt(horasInput.value);
    
        fetch(`getprecio.php?codigo=${codigo}`)
            .then(response => response.json())
            .then(data => {
                if (data.precio_x_hora) {
                    const total = horas * data.precio_x_hora;
                    const formattedTotal = total.toLocaleString('en-US', {minimumFractionDigits: 0});
                    resultadoDiv.textContent = `El costo total es: $${formattedTotal}. Contacto: 3152916083`;
                } else {
                    resultadoDiv.textContent = 'Error obteniendo el precio por hora.';
                }
            })
            .catch(error => console.error('Error fetching precio:', error));
    };
});
