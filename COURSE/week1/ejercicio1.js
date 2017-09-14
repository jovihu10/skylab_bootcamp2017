// EJERCICIO1

function returnTwoNumbers(x1, x2) {
    // Escribe una funcion que teniendo 2 enteros x1 y x2 devuelva todos los enteros entre ellos.
    // Si  x2 es más pequeño que x1, debería devolver -1
    var result = []
    if (x1 < x2) {
        for (var i = x1; i <= x2; i++) {
            result.push(i)
        }
    } else {
        for (var i = x1; i >= x2; i--) {
            result.push(i)
        }
    }
    return result
}

returnTwoNumbers(2, 3)

// EJERCICIO2

// Tabla de multiplicar
// Escribe una función que escribe en la consola la tabla de multiplicación del 1 al 10
function table() {
    var arResult = []
    var i = 1

    for (i = 1; i <= 10; i++) {
        var iString = ''
        var count
        for (count = 1; count <= 10; count++) {
            var result = i * count
            iString = iString.concat(result + ' ')
        }
        console.log('\n' + iString)
    }
}
table()
// REsult:
// 1 2 3 4 5 6 7 8 9 10

// 2 4 6 8 10 12 14 16 18 20

// 3 6 9 12 15 18 21 24 27 30

// 4 8 12 16 20 24 28 32 36 40

// 5 10 15 20 25 30 35 40 45 50

// 6 12 18 24 30 36 42 48 54 60

// 7 14 21 28 35 42 49 56 63 70

// 8 16 24 32 40 48 56 64 72 80

// 9 18 27 36 45 54 63 72 81 90

// 10 20 30 40 50 60 70 80 90 100