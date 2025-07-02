# AsistApp

>[!important]
>
> **Authors:**
>- **Designed** and **created by** _Ivan Panchana Rodriguez._ (@CosmosSpace-x)
>- **Developed by** _Jonathan Panchana Rodriguez._ (@jonistyle2023)
>
> 2025 ©**AssistApp.** Designed & Develop by **Cosmos_Space-x Industries**

![assistAppLogo.png](templates/assets/images/assistApp-Logo.png)

this is a simple app that allows you to create and manage tasks. It is built using Python and React.

---

## **Estructura del Proyecto**

*Este proyecto está organizado siguiendo una arquitectura moderna que separa el backend (API de Django) del frontend (aplicación de React).*

```
asistApp/
├── .gitignore               # Archivos y carpetas a ignorar por Git
├── apps/                    # Contenedor para las aplicaciones de Django
│   ├── main/                # App principal (Cursos, Clases)
│   │   ├── migrations/      # Archivos de migración de la base de datos
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── models.py        # Define las tablas de la base de datos (Curso, Clase)
│   │   ├── serializers.py   # Convierte los modelos a formato JSON para la API
│   │   ├── urls.py          # Define las rutas de la API para esta app
│   │   └── views.py         # Lógica de la API (ViewSets para CRUD)
│   ├── attendance/          # (Otras apps del proyecto...)
│   └── users/
├── config/                  # Configuración principal del proyecto Django
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py          # Configuración general (apps instaladas, base de datos, CORS)
│   ├── urls.py              # Rutas principales que conectan las apps
│   └── wsgi.py
├── db.sqlite3               # Base de datos de desarrollo (SQLite)
├── frontend/                # Contenedor para toda la aplicación de React (Frontend)
│   ├── public/
│   │   └── index.html       # Plantilla HTML principal donde se monta React
│   ├── src/                 # Código fuente de la aplicación React
│   │   ├── api/             # (Opcional) Lógica para las llamadas a la API (Axios)
│   │   ├── components/      # Componentes de UI reutilizables y genéricos
│   │   │   ├── Header.js
│   │   │   ├── Modal.js
│   │   │   ├── SectionCard.js
│   │   │   └── Sidebar.js
│   │   ├── hooks/           # (Opcional) Hooks de React personalizados
│   │   ├── layouts/         # Componentes de estructura de página (ej. con sidebar)
│   │   │   └── DashboardLayout.js
│   │   ├── pages/           # Componentes que representan páginas completas
│   │   │   ├── ClassesPage.js
│   │   │   ├── LoginPage.js
│   │   │   └── QrGeneratorPage.js
│   │   ├── App.js           # Componente raíz que configura el enrutador
│   │   ├── index.css        # Estilos globales y directivas de Tailwind CSS
│   │   └── index.js         # Punto de entrada de la aplicación React
│   ├── .gitignore
│   ├── package.json         # Define las dependencias y scripts del frontend (npm)
│   ├── postcss.config.js    # Configuración de PostCSS (requerido por Tailwind)
│   └── tailwind.config.js   # Archivo de configuración de Tailwind CSS
├── manage.py                # Utilidad de línea de comandos de Django
├── README.md                # Este archivo de documentación
└── requirements.txt         # Lista de dependencias de Python para el backend
```

## **Tecnologías del Backend (Servidor)**

*El backend se encarga de toda la lógica de negocio, el acceso a la base de datos y la seguridad.*

- **Python:** Es el lenguaje de programación principal sobre el que se construye toda la lógica del servidor. Su sintaxis limpia y su vasto ecosistema son la base de nuestro backend.
- **Django:** Es el framework web "full-stack" que estructura todo el backend. Gestiona las URLs, la configuración del proyecto, el panel de administrador, la seguridad y sirve como el esqueleto principal de la aplicación.
- **Django REST Framework (SRF):** Es una extensión de Django fundamental para este proyecto. Su única función es transformar los datos de Django en una API REST (en formato JSON). Se encarga de la serialización (convertir modelos a JSON), las vistas de API y la autenticación de los endpoints. Es el "traductor" entre Django y React.
- **Django-cors-headers:** Es un paquete de seguridad esencial. Actúa como un "guardia fronterizo" que le da permiso explícito a nuestra aplicación de React (corriendo en localhost:3000) para que pueda solicitar y recibir datos de nuestro servidor Django (corriendo en localhost:8000), evitando errores de CORS (Cross-Origin Resource Sharing).

## **Tecnologías del Frontend (Cliente/Navegador)**

*El frontend se encarga de todo lo que el usuario ve e interactúa en su navegador.*

- **JavaScript:** Es el lenguaje de programación que da vida al frontend. Se utiliza para manejar la interactividad, la lógica de los componentes, los eventos del usuario y la comunicación con el backend.
- **React:** Es la biblioteca principal para construir la interfaz de usuario. Nos permite crear la aplicación como un conjunto de componentes reutilizables (`Sidebar`, `KpiCard`, `Modal`, etc.), gestionar el "estado" de la aplicación (quién está logueado, qué datos se muestran) y actualizar la vista de forma eficiente sin recargar la página.
- **React Router (`react-router-dom`):** Actúa como el "navegador GPS" interno de la aplicación. Gestiona las diferentes "páginas" (rutas como `/`, `/qr-generator`, `/login`) de forma dinámica en el lado del cliente, permitiendo una experiencia de usuario fluida y sin recargas completas de la página.
- **Axios:** Es el "mensajero" del frontend. Es una librería de JavaScript que se especializa en realizar peticiones HTTP a la API de Django. Se usa para obtener (`GET`) la lista de cursos y para enviar (`POST`) nuevos datos al servidor.
- **TailwindCSS:** Es el framework de CSS que define todo el aspecto visual de la aplicación. Se utiliza para el diseño, los colores, la tipografía y, crucialmente, para el diseño responsive que adapta la interfaz a móviles, tabletas y escritorio.
- **qrcode.react:** Una librería especializada cuya única función es tomar un dato (como el ID de una clase) y renderizarlo como un código QR visual (en formato SVG) que puede ser escaneado.
- **react-icons:** Es la librería que provee todos los íconos utilizados en la interfaz (`FiMenu`, `FiPlus`, etc.). Ayuda a crear un lenguaje visual claro y mejora la experiencia de usuario.
- **Node.js/npm:** Son el entorno de ejecución y el gestor de paquetes del frontend. Node.js permite correr el servidor de desarrollo de React, y `npm` se encarga de instalar y gestionar todas las librerías de JavaScript que el proyecto necesita.

## **Base de datos y Herramientas de Desarrollo**

*Estas herramientas soportan el ciclo de vida del desarrollo y el almacenamiento de datos.*

- **SQLite:** Es el motor de base de datos que estamos utilizando durante el desarrollo. Es un archivo simple (db.sqlite3) donde Django almacena toda la información persistente de la aplicación (cursos, clases, usuarios, etc.) de una manera ligera y fácil de gestionar.
- **Postman:** Fue nuestra herramienta de diagnóstico y pruebas. La usamos para interactuar directamente con la API de Django antes de construir el frontend, asegurándonos de que los endpoints funcionaran correctamente y devolvieran los datos esperados.
- **PyCharm:** Es el Entorno de Desarrollo Integrado (IDE) que estás utilizando para escribir, gestionar y ejecutar tanto el código del backend (Python/Django) como el del frontend (JavaScript/React).

---

## **Routes (Para pruebas)**

### `main` **(Pruebas)**

CREAR UN CURSO
- Método: POST
- URL: `http://127.0.0.1:8000/api/main/cursos/`
```json
{
    "nombre": "Petróleos 3/1",
    "lista_info": "Lista de estudiantes de petróleos."
}
```
Deberías recibir una respuesta `201 Created` con los datos del curso creado, incluyendo su `id`. **Copia este `id`**.

OBTENER LA LISTA DE CURSOS
- Método: `GET`
- URL: `http://127.0.0.1:8000/api/main/cursos/`
- Haz clic en **Send**. Verás una lista con todos los cursos que has creado.

CREAR UNA CLASE PARA ESE CURSO
- **Método:** `POST`
- **URL:** `http://127.0.0.1:8000/api/main/clases/`
- **Body > raw > JSON:** (Usa el `id` del curso)
```json
{ 
	"nombre": "Introducción a la Perforación", 
	"horario": "Martes y Jueves 8:00 - 10:00", 
	"curso": "AQUÍ_PEGA_EL_ID_DEL_CURSO_CREADO" 
}
```
- Haz clic en **Send**. Recibirás una respuesta `201 Created`.

VER UN CURSO CON SUS CLASES ANIDADAS
- **Método:** `GET`
- **URL:** `http://127.0.0.1:8000/api/main/cursos/AQUÍ_PEGA_EL_ID_DEL_CURSO/`
- **Send**. verás los detalles del curso y, dentro de un array llamado `clases`, verás la clase que acabas de crear.

---
### `Users` **(Pruebas)**

REGISTRAR UN DOCENTE:
- Método: `POST`
- URL: `http://127.0.0.1:8000/api/auth/register/`
```json
{
    "username": "jdpanchana1",
    "email": "jdpanchana1@utpl.edu.ec",
    "password": "David123.",
    "password2": "David123."
}
```
- RESPUESTA ESPERADA: `201 Created`

PROBAR BLOQUEO DE CUENTA (django-axes):
- Método: `POST`
- URL: `http://127.0.0.1:8000/api/auth/login/`
```json
{
    "email": "jdpanchana1@utpl.edu.ec",
    "password": "unapasswordincorrecta"
}
```
- OBSERVACIÓN: Envía esta petición 5 veces. Recibirás un error `401 Unauthorized`. A la sexta vez, deberías recibir un error `403 Forbidden` con un mensaje indicando que la cuenta está bloqueada.

INICIAR SESIÓN CORRECTAMENTE:
- MÉTODO: `POST`
- URL: `http://127.0.0.1:8000/api/auth/login/`
```json
{
    "email": "jdpanchana1@utpl.edu.ec",
    "password": "David123."
}
```
- RESPUESTA ESPERADA: Recibirás una respuesta `200 OK` con un `access` token y un `refresh` token. **Copia el `access` token.**

ACCEDER A UN RECURSO PROTEGIDO:
- **Método:** `GET`
- URL: `http://127.0.0.1:8000/api/auth/profile/`
- Headers:
    - Key: `Authorization`
    - Value: `Bearer TU_ACCESS_TOKEN_COPIADO_AQUÍ`
- Recibirás los datos del perfil del usuario autenticado.

---

## Creación Django Project

Para crear aplicación en Django
```python
python manage.py startapp planificacion
```

MIGRACIONES, CADA VEZ QUE HAGA CAMBIOS
Para probar conexión (Cada que surgen cambios):
```python
python manage.py makemigrations
python manage.py migrate
