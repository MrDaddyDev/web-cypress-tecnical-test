@shopping-car-feature
Feature: Validacion del carrito de compra
    Yo como Analista de calidad deseo validar la caracteristica del carrito de compras para certificar su calidad

    Background: Inicio de pagina y login
        Given que ingresamos a la pagina de saucedemo
        When ingreso el usuario "standard_user" y contraseña "secret_sauce"

    Scenario Outline: Validor incremento y decremento en el contador del carrito de compras
        And intento "<typeTest>" al carrito de compras "<countProducts>" productos
        Then se podra ver el "<typeCounting>" de los productos en el carrito de compras
        Examples:
            | typeTest | countProducts | typeCounting |
            | agregar  | 4             | incremento   |
            | quitar   | 4             | decremento   |

    Scenario Outline: Validar la visualizacion del carrito de compras
        And intento "<typeTest>" al carrito de compras "<countProducts>" productos
        And ingreso a la seccion del carrito
        Then al entrar al carrito se podra observar el nombre, descripcion y valor en el carrito de compras
        Examples:
            | typeTest | countProducts |
            | agregar  | 2             |

    Scenario Outline: Validar eliminar del carrito un producto dedes la interfaz de ShoppingCart
        And intento "<typeTest>" al carrito de compras "<countProducts>" productos
        And ingreso a la seccion del carrito
        And intento eliminar del carrito de compras "<countProductsToDelete>" productos
        Then se podra observar que se elimina producto por producto del carrito de compras
        Examples:
            | typeTest | countProducts | countProductsToDelete |
            | agregar  | 4             | 2                     |
