# Cypress Test Suite

Este proyecto contiene un conjunto de pruebas automatizadas realizadas con [Cypress](https://www.cypress.io/) para evaluar la funcionalidad de una aplicación web. Fue desarrollado como parte de una prueba técnica.

---

## 🛠️ Tecnologías utilizadas

- **Cypress**: Framework de pruebas end-to-end.
- **Cypress Cucumber**: Plugin para integracion de Cypres con Cucumber.
- **Node.js**: Entorno de ejecución para JavaScript.
- **Allure Cypress**: Entrega de reportes de las ejecuciones.

---

## 📋 Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v14 o superior recomendado).
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/).
- Java (v8 o superior, para su uso con Allure Cypress)

---

## 🚀 Instalación

1. Clona este repositorio: https://github.com/tu-usuario/cypress-test-suite.git
2. npm install


## 📂 Estructura del proyecto

```
web-cypress-tecnical-test/
├── allure-report/                          # Inicializacion del servidor de reportes por parte de Allure
├── cypress/                                # Carpetería base de cypress
│   ├── e2e/                                # Definicion base de cypres para los tests
│   │   ├── features/                       # Carpeta en la cual se encontraran los archivos .feature que cuentan con el respectivo Gherkin para proximo ser llevado a los stepsdefinitions
│   │   ├── step_definitions/               # En este lugar estan los scripts que se conectan con los archivos .feature para posteriormente ser ejecutados
│   ├── pages/                              # Encarpetado por parte del modelo POM integrado con Cypress y cucumber para este proyecto, es dopnde esta las WebPages y el PageObjects para ella
│   ├── support/                            # Carpeteria base de cypress para configuraciones extras y ayudas varias
│   ├── test_supports/                      # Carpeta creada por el QA para guardar ciertos datos para ayuda de organizacion de los tests y reports
├── node_modules/                           # Dependencias instaladas
├── .cypress-cucumber-preprocessorrc.json   # Condifuracion del preproccesor de cucumber y cypress
├── cypress.config.js                       # Configuración principal de Cypress
├── package.json                            # Dependencias y scripts del proyecto
├── README.md                               # Documentación del proyecto
```

## 🧪 Ejecución de pruebas

**Si quieres ejecutar las pruebas desde el lado de Cypress en su interfaz grafica**

1. Abrir una terminal y iniciar cypress.

    ```npm run start cypress ó cypress open```

2. Al tener la interfaz si no ingresa directamente al proyecto, seleccionar la carpeta del mismo.

3. Escoger su browser de preferencia.

4. Ya estando edentro ejecutas los diferentes features que hay simplemente dandolde click en cada uno de ellos.
   
    ```
    - checkout.feature
    - login.feature
    - shopping.feature
    ```
**Por otro lado si quieres ejecutar y generar el reporte con Allure reports**

1. Abrir uan terminar y ejecutar los siguientes comandos.

    ```npm run allure:generate``` Este comando ejecuta todas las pruebas sin discriminar entre una u otra.

2. Para poder visualizar los reportes se necesita iniciar el servidor de Allure de la siguiente manera

    ```npm run allure:open``` Este comando inicializa y abre el reporte de pruebas de Allure.

## 📜 Descripción de las pruebas

Las pruebas se dividen en las siguientes:
```
├── login.feature
|   ├── Validar login exitoso
|   ├── Validar login con usuario bloqueado  
|   ├── Validar login con username o password incorrecta  
|   ├── Validar login sin username o password 
├── shoppingCart.feature
|   ├── Validor incremento y decremento en el contador del carrito de compras
|   ├── Validar la visualizacion del carrito de compras
|   ├── Validar eliminar del carrito un producto dedes la interfaz de ShoppingCart    
├── checkout.feature          
|   ├── Validar el correcto flujo de checkout   
|   ├── Validar los campos a llenar para hacer la compra   
```

Las pruebas tiene algunos Examples para añadir complejidad y parametrización a las diferentes pruebas, esto ayuda a la reutilización de codigo y simplificación en los stepDefinitions.

## 📧 Contacto
Para más información o consultas:
```
Autor: Carlos Julio Piragua Perez
Correo: carlos.piragua.contacto@gmail.com
```