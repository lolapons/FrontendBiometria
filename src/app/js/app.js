document.addEventListener('DOMContentLoaded', () => {
    // Función para obtener los datos de los sensores desde la API
    async function fetchSensorData() {
        try {
            // Llamamos a la API para obtener los datos
            const response = await fetch('http://localhost:13000/ozone');
            if (!response.ok) {
                throw new Error('Error al obtener los datos del sensor');
            }
            const sensorData = await response.json();

            // Llamamos a la función para renderizar los datos en la tabla
            renderSensorData(sensorData);
        } catch (error) {
            console.error('Hubo un problema con la petición:', error);
        }
    }

    // Función para renderizar los datos en la tabla
    function renderSensorData(data) {
        const tableBody = document.getElementById('sensor-data');
        tableBody.innerHTML = ''; // Limpiamos la tabla antes de insertar nuevos datos

        data.forEach((sensor) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sensor.id}</td>
                <td>${sensor.timestamp}</td>
                <td>${sensor.ozone_level}</td>
                <td>${sensor.location}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Llamamos a la función fetchSensorData cada 5 segundos para actualizar los datos
    fetchSensorData();
    setInterval(fetchSensorData, 5000);
});
