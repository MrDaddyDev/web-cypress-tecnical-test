@login-feature
Feature: Validación del login
    Yo como Analista de calidad deseo validar la caracteristica de login para certificar su calidad

    Background: Inicio de pagina
        Given que ingresamos a la pagina de saucedemo

    Scenario Outline: Validar login exitoso
        When ingreso el usuario "<username>" y contraseña "<password>"
        Then se podra observar el login exitoso
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |

    Scenario Outline: Validar login con usuario bloqueado
        When ingreso el usuario "<username>" y contraseña "<password>"
        Then se podra observar el mensaje de error "Epic sadface: Sorry, this user has been locked out."
        Examples:
            | username        | password     |
            | locked_out_user | secret_sauce | 

    Scenario Outline: Validar login con username o password incorrecta
        When ingreso el usuario "<username>" y contraseña "<password>"
        Then se podra observar el mensaje de error "Epic sadface: Username and password do not match any user in this service"
        Examples:
            | username      | password     |
            | standard_use  | secret_sauce |
            | standard_user | secret_sauc  |

    Scenario Outline: Validar login sin username o password
        When ingreso el usuario "<username>" y contraseña "<password>"
        Then se podra observar el mensaje de error "<errorMessage>"
        Examples:
            | username      | password     | errorMessage                       |
            | null          | secret_sauce | Epic sadface: Username is required |
            | standard_user | null         | Epic sadface: Password is required |
