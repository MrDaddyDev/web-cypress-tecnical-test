@checkout-feature
Feature: Validacion del Checkout
    Yo como Analista de calidad deseo validar la caracteristica del checkout para certificar su calidad

    Background: Inicio de pagina y proceso hasta el checkout
        Given que ingresamos a la pagina de saucedemo
        When ingreso el usuario "standard_user" y contraseña "secret_sauce"
        And intento "agregar" al carrito de compras "2" productos
        And ingreso a la seccion del carrito
        And ingreso al checkout

    Scenario: Validar el correcto flujo de checkout
        And intento llenar los campos de manera "Correcta"
        Then se podra observar el mensaje de compra exitosa "Thank you for your order!"

    Scenario Outline: Validar los campos a llenar para hacer la compra
        And intento llenar los campos de manera "<typeTest>"
        Then se podra observar el mensaje de error "<errorMessage>"
        Examples:
            | typeTest               | errorMessage                   |
            | Erronea Sin FirstName  | Error: First Name is required  |
            | Erronea Sin Lastname   | Error: Last Name is required   |
            | Erronea Sin PostalCode | Error: Postal Code is required |
