function calcular (tipo, valor) {

    if (tipo === 'acao') {

        if (valor === 'c') {
            document.getElementById('resultado').value = ''
        }

        if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {

            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            if (document.getElementById('resultado').value == '') {
                document.getElementById('resultado').placeholder = 'Erro: entre com um valor'

            } else {

                var valor = eval(document.getElementById('resultado').value)            
                document.getElementById('resultado').value = valor

            }
            

           console.log(parseFloat(valor))
        }

    } else if (tipo === 'valor') {


        document.getElementById('resultado').value += valor
    }
}


function verfTecla() {
    
    var tecla = event.keyCode
    var teclaApertada = '!'
    var teclaApertadaNum = '!'

    //Símbolos
    if (tecla === 46 || tecla === 8){
        teclaApertada = 'c'
    } else if (tecla === 111 || tecla === 193) {
        teclaApertada = '/'
    } else if (tecla === 106) {
        teclaApertada = '*'
    } else if (tecla === 109) {
        teclaApertada = '-'
    } else if (tecla === 107) {
        teclaApertada = '+'
    } else if (tecla === 194 || tecla === 110) {
        teclaApertada = '.'
    } else if (tecla === 13) {
        teclaApertada = '='
    }

    //Números
    if (tecla === 97){
        teclaApertadaNum = 1
    } else if (tecla === 98) {
        teclaApertadaNum = 2
    } else if (tecla === 99) {
        teclaApertadaNum = 3
    } else if (tecla === 100) {
        teclaApertadaNum = 4
    } else if (tecla === 101) {
        teclaApertadaNum = 5
    } else if (tecla === 102) {
        teclaApertadaNum = 6
    } else if (tecla === 103) {
        teclaApertadaNum = 7
    } else if (tecla === 104) {
        teclaApertadaNum = 8
    } else if (tecla === 105) {
        teclaApertadaNum = 9
    } else if (tecla === 96) {
        teclaApertadaNum = 0
    }

    
    if (teclaApertada != '!') {
        calcular('acao', teclaApertada)
    }

    if (teclaApertadaNum != '!') {
        calcular('valor', teclaApertadaNum)
    }
}