# Aplicación Web de registro de usuarios.

## Tecnologías utilizadas.

- Vue js
- Vuex
- HTML 5
- CSS 3

El proyecto fue creado mediante la herramienta que la organizacion de Vue JS nos proporciona: [Vue CLI](https://cli.vuejs.org/).

## Implementacion del proyecto

### Requisitos

1. Node JS

Tener [Node js](https://nodejs.org/es/) instalado en el equipo. Si deseamos conocer si lo tenemos instalado basta con ejecutar un comando en una terminal o consola de nuestro sistema operativo y como respuesta nos debera indicar el numero de versión que tenemos instalada en nuestra maquina:

```
node --version
```

2. GIT

Tener [GIT](https://git-scm.com/) en nuestra maquina. Por defecto en sistemas Linux ya viene instalado. Pero para saber si ya contamos con él, ejecutar este comando en una consola o terminal:

```
git --version
```

### Ejecución

Primero clonar este repositorio en nuestro equipo en alguna carpeta que tengamos destinada a proyectos, ejecutando un comando en la consola o terminal:

```
git clone https://github.com/massana2110/user-registration-web-app.git
```

Una vez clonado, siempre en nuestra terminal o consola nos debemos mover a ese directorio

```
cd user-registration-web-app
```

Luego, se deben instalar las dependencias necesarias para la correcta ejecución del proyecto, mediante el comando:

```
npm install
```

Este comando leera nuestro **package.json** en el cual tenemos listadas las dependencias. Ya una vez nos indique que se instalo todo lo necesario, ejecutaremos lo siguiente:

```
npm run serve
```

Esto se encargara de habilitarnos un servidor de desarrollo de manera local en el puerto 8080 al cual ingresaremos en nuestro navegador (de preferencia **Chrome**, **firefox**, **Microsoft Edge** o cualquier navegador moderno) digitando esto: http://localhost:8080/
