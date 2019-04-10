# Server Hotel

Este es el servidor de la aplicación web del hotel. Con este se define el backend de la aplicación.

**Indice**

1. [Estructura](#estructura)
2. [Server](#server)
2. [Dependencias](#dependencias)
3. [Uso](#uso)

<div id='estructura' />

## Estructura

- En la carpeta ```public``` se encuentra todos los archivos que se necesitan para el Frontend en ella se las siguientes carpetas:

    - `css`: en ella estaran todas los archivos de estilos de la aplicacón
    - `img`: en ella se encuentra todas las imagenes necesarias para la aplicación
    - `js` : en ella se encuentra todo el `javascript` necesario en el Frontend para el funcionamiento de la aplicación aplicación

- En la carpeta `views` se encuentra todas la plantillas de la aplicación. Dentro de estas habran encontraran dos carpetas:

    - `pages`: se definen todas las platillas que se van a mostrar dentro de la aplicacion.
    - `partials`: se definen todas aquellas partes de codigo que se repiten dentro de las plantillas para poder se reutilizadas

<div id='server' />

## Server

- El archivo `server.js` se define la configuracion del servidor. 
- el archivo `routes.js` se definen todas las rutas a las que respondera el servidor

<div id='dependencias' />

## Dependecias

1. [express](https://expressjs.com/es/) como principal, ella nos permite desplegar de manera sencilla el servidor

<div id='uso' />

## Uso

Abrir una consola dentro de la carpeta hotel-server.

**Antes de correr cualquier comando**

```shell
    npm install
```

Contaran con las siguientes funcionalidades:

- ```shell
    npm run start
    //con esto montaran el servidor
    ```

- ```shell
    npm run start-dev
    //con esto montaran el servidor en modo desarrollo 
    // podran hacer cambios y se actuliara en tiempo real
    ```

- ```shell
    npm run lint -- --fix
    //con formateran el codigo al estandard ECMAScript 2016
    ```