# App Developer - Ejercicio de Desarrollo

## Objetivo del ejercicio

Este ejercicio tiene como objetivo evaluar tus habilidades de desarrollo a través de un caso práctico simulado. El desafío consiste en construir una aplicación que procese un número ingresado por el usuario, encuentre sus múltiplos de 3, 5 y 7 dentro de un rango específico, los visualice con colores distintivos y persista tanto la petición como el resultado en una base de datos de Firebase.

## Demostración en Línea

Puedes acceder a una demostración de la aplicación en línea a través del siguiente enlace:
[https://appdeveloper-b0a81.web.app/home](https://appdeveloper-b0a81.web.app/home)

## Instrucciones

La aplicación debe cumplir con los siguientes requisitos:

1.  **Entrada del Usuario:** Permitir al usuario ingresar un parámetro numérico.
2.  **Generación de Rango:** Generar la secuencia de números enteros desde 0 hasta el número ingresado por el usuario (inclusive).
3.  **Encontrar Múltiplos:** Identificar los múltiplos de 3, 5 y 7 dentro del rango generado.
4.  **Visualización de Múltiplos:** Mostrar los números del rango en una lista con el siguiente esquema de colores:
    - Múltiplos de 3: **VERDE**
    - Múltiplos de 5: **ROJO**
    - Múltiplos de 7: **AZUL**
    - Si un número es múltiplo de varios: Mostrar en el color del **menor** de sus múltiplos.
    - Si un número es múltiplo de varios: Desplegar todos los múltiplos a los que pertenece.
    - Números sin múltiplos de 3, 5 o 7: **NEGRO**.
5.  **Persistencia de Datos:** Guardar en una base de datos de Firebase (Realtime Database o Firestore) tanto el número ingresado por el usuario (la petición) como la lista de números con sus respectivos múltiplos y colores (el resultado).

## Tecnologías Utilizadas

- **Frontend Framework:** [Angular](https://angular.io/) (última versión disponible)
- **UI Framework:** [Ionic](https://ionic.io/)
- **Backend y Hosting:** [Firebase Hosting](https://console.firebase.google.com/)
- **Base de Datos:** [Firebase Realtime Database](https://console.firebase.google.com/)

## Estructura del Proyecto

├── angular.json
├── ionic.config.json
├── package.json
├── src/
│ ├── app/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── ...
│ ├── assets/
│ ├── environments/
│ └── ...
├── firebase.json
├── .firebaserc
├── README.md
└── ...

## Instrucciones para Ejecutar la Aplicación (Localmente)

1.  **Clonar el repositorio:**
    ```bash
    git clone <tu_repositorio_url>
    cd <nombre_del_repositorio>
    ```
2.  **Instalar las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar la aplicación en modo desarrollo:**
    ```bash
    ionic serve
    ```
    Esto abrirá la aplicación en tu navegador.

## Instrucciones para Desplegar a Firebase Hosting

1.  **Asegúrate de tener la Firebase CLI instalada:**
    ```bash
    npm install -g firebase-tools
    ```
2.  **Inicia sesión en Firebase (si no lo has hecho):**
    ```bash
    firebase login
    ```
3.  **Navega a la raíz de tu proyecto Angular:**
    ```bash
    cd <nombre_del_repositorio>
    ```
4.  **Inicializa Firebase en tu proyecto (si no lo has hecho):**
    ```bash
    firebase init hosting
    ```
    Sigue las instrucciones en pantalla, asegurándote de seleccionar tu proyecto de Firebase y la carpeta de compilación de Angular (generalmente `dist/<nombre-de-tu-app>/browser` o `www`).
5.  **Construye la aplicación para producción:**
    ```bash
    ng build --prod
    # o si estás usando Ionic Angular
    ionic build --prod
    ```
6.  **Despliega la aplicación a Firebase Hosting:**
    ```bash
    firebase deploy --only hosting
    ```
7.  **Accede a tu aplicación desplegada en la URL proporcionada por Firebase.**

## Configuración de la Base de Datos en Firebase

1.  **Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).**
2.  **Elige Realtime Database o Firestore como tu base de datos.**
3.  **Configura las reglas de seguridad de tu base de datos según tus necesidades.**
4.  **Utiliza el SDK de Firebase en tu aplicación Angular para interactuar con la base de datos.** Asegúrate de configurar las credenciales de tu proyecto Firebase en tu aplicación. _(Puedes mencionar brevemente los servicios o módulos de AngularFire que utilizaste)._

## Notas sobre el Código

- El código está organizado en componentes, páginas y servicios para una mejor mantenibilidad.
- Se han incluido comentarios en el código para explicar la lógica y las decisiones tomadas.
- Se ha tenido en cuenta la limpieza y la legibilidad del código.
