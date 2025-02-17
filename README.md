# Technical Test - Muhami

Este repositorio contiene el código para la aplicación , que incluye tanto el **backend** (desarrollado con Node.js, Express y MongoDB) como el **frontend** (desarrollado con React.js). A continuación, se encuentran las instrucciones para levantar ambos servidores y configurarlos adecuadamente.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para la base de datos (si no tienes un clúster configurado, sigue las instrucciones a continuación).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para manejar las dependencias.

## Estructura del Proyecto

- **Backend:** Contenido en la carpeta `/NODE-EXPRESS-MONGODB-back`.
- **Frontend:** Contenido en la carpeta `/muhami-technical-test-front`.

## Pasos para levantar el proyecto

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

git clone https://github.com/edlopezg/techincal-test-muhami.git
cd technical-test-muhami

### 2. Levantar el backend

Para levantar el servidor del backend, sigue estos pasos:

#### 2.1. Configuración de variables de entorno

Ve a la carpeta `NODE-EXPRESS-MONGODB-back` y crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

.env
PORT=5200
SERVER_DB=<tu-cluster-de-atlas>.mongodb.net
USER_DB=<tu-usuario>
PASSWORD_DB=<tu-contraseña>

Sustituye <tu-cluster-de-atlas>, <tu-usuario> y <tu-contraseña> con los valores correspondientes de tu base de datos en MongoDB Atlas.

Nota: Asegúrate de que el archivo .env esté incluido en el archivo .gitignore para evitar subir credenciales sensibles al repositorio.

### 2.2 Instalar dependencias
Instala las dependencias necesarias para el backend ejecutando el siguiente comando:

cd NODE-EXPRESS-MONGODB-back
npm install
En caso de necesitar alguna dependencia extra para instalar express, node.js, mongoose etc, consulta la documentacion correspondiente

## 2.3. Levantar el servidor
Para iniciar el servidor del backend, ejecuta el siguiente comando:

npm run dev
El servidor se iniciará en el puerto 5200 (o el puerto que hayas configurado en el archivo y/o PORT .env).

#### Pruebas propuestas end points
http://localhost:5200/products GET
http://localhost:5200/products/67b286857e7dc5d0d0777367 PUT
http://localhost:5200/products/67b286857e7dc5d0d0777367 GET
http://localhost:5200/products POST
http://localhost:5200/products/67b286697e7dc5d0d0777363 DELETE


### 3. Levantar el frontend
Ahora, para levantar el servidor del frontend, sigue estos pasos:

## 3.1. Instalar dependencias
Ve a la carpeta muhami-technical-test-front e instala las dependencias necesarias para el frontend:


cd muhami-technical-test-front
npm install

# 3.2. Levantar el servidor
Para iniciar el servidor del frontend, ejecuta el siguiente comando:

npm run dev o npm start
El frontend se iniciará y podrás acceder a la aplicación en tu navegador en http://localhost:3000.

Una vez iniciado el lado del Frontend se podran observar las tarjetas que contienen la informacion extraida de la API que se esta consumiendo, ademas de sus diferentes funcionalidades.

*** Cualquier duda o comentario con respecto al proyecto no dudes en contactarme c: ***





