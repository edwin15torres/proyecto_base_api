# Requerimientos

- Node.js
- Visual Studio Code
- Postman
- Postgres
- Git 

# Instalación de Nest

**1. Instalar Nest.js CLI**
    
* En una nueva consola, ejecuta el siguiente comando para instalar el CLI de Nest.js:

```bash
npm install -g @nestjs/cli
```

**2. Verificar que Nest.js CLI haya quedo instalado correctamente:**

```bash
-   nest
-   nest --version
```

# Creación nueva aplicación API Rest

**1. Crear plantilla de proyecto y selecciones npm (manejador de paquetes):**

```bash
    - nest new project-name
    - npm
```

* Nota: La aplicación genera un repo Git por default.

**2. Configuar la aplicación**

* Crear una ruta base de los endpoints.

    $/*Archivo src/main.ts */$

**3. Ejecutar aplicación:**

```bash
    npm run start:dev
```

**4. Verificar que se ejecute la aplicación en el puerto:**

    * $http://localhost:3000/api/v1$


# Tutorial Persistencia en Nest.js

**1. Entendimiento de la arquitectura**

-   Crear una aplicación llamda  **modern-art-museum**

**2. Crear nuevo módulo**

```bash
    nest g mo museum
```
- Nota: Esto creará la carpeta src/museum y dentro de esa carpeta el archivo museum.module.ts

**2. Crear la clase recurso "MuseumEntity"**

```bash
    nest g cl museum/museum.entity --no-spec
```
- Nota: Como no queremos crear un archivo de pruebas para esa clase incluimos la opción --no-spec en el comando para crear la clase.

- Como queremos que la clase MuseumEntity se persista en la base de datos, necesitamos agregarle algunas anotaciones de TypeORM; por tanto necesitamos instalar la dependencia de TypeORM para NestJS. Esto se hace ejecutando el siguiente comando en consola.