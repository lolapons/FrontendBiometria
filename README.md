# FrontendBiometria

# Descripción del Proyecto Frontend

Este proyecto frontend se encarga de mostrar datos en tiempo real sobre los niveles de ozono y la temperatura, recuperados de una API. El diseño es simple y está estructurado en HTML, CSS y JavaScript, permitiendo que la información se actualice automáticamente cada 5 segundos.

## Archivos y Funcionalidades

### `app.js`
Este archivo contiene la lógica principal del frontend. Al cargar la página, se hace una solicitud a la API para obtener los datos más recientes del sensor. Luego, esos datos se muestran en el HTML actualizando elementos del DOM. Además, la función para obtener los datos se ejecuta cada 5 segundos para mantener la información actualizada.

### `index.html`
El archivo HTML estructura la página donde se muestran los datos de los sensores. Contiene un título y varios párrafos que son actualizados dinámicamente con la información más reciente del sensor de ozono y temperatura. También está enlazado al archivo CSS para el diseño y a `app.js` para la funcionalidad.

### `index.css`
El archivo CSS define el estilo de la página. Se utiliza un diseño sencillo y limpio, con un fondo claro y un contenedor centralizado que muestra los datos de manera ordenada. También se aplican sombras y bordes redondeados al contenedor para mejorar la apariencia visual.

---

*Lola Pons Bargues*
