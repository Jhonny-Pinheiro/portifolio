const input  = document.querySelector('input')
const buttons = document.querySelectorAll('button')

let acumulador = 0
let operacionPendiente = false

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        switch(button.innerText) {
            case '+':
                acumulador += parseFloat(input.value)
                input.value = acumulador
                operacionPendiente = true
                break
            case '-':
                console.log('Hola2')
                break
            default:
                if(operacionPendiente === true) {
                    input.value = button.innerText
                    operacionPendiente = false
                } else {
                    input.value += button.innerText
                }
                break
        }
    })
})