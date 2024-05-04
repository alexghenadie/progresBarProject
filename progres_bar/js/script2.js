const select = (selector) => {
    return document.querySelector(selector)
}
const selectAll = (selector) => {
    return document.querySelectorAll(selector)
}
const create = (selector) => {
    return document.createElement(selector)
}


const body = select('body')
const background = create('div')

const progressBarr = create('div')
const squareBar1 = create('div')
const numberSquare1 = create('span')
const textSquare1 = create('div')
const squareBar2 = create('div')
const numberSquare2 = create('span')
const textSquare2 = create('div')
const squareBar3 = create('div')
const numberSquare3 = create('span')
const textSquare3 = create('div')
const lineBar1 = create('div')
const lineBar2 = create('div')

const allForms = create('div')

const formular1 = create('div')
const headerFormular1 = create('div')
const headerFormular1H1 = create('div')
const headerFormular1H3 = create('div')
const containerInput1 = create('div')
const input11 = create('input')
const errorInput11 = create('p')
const input12 = create('input')
const errorInput12 = create('p')
const input13 = create('input')
const errorInput13 = create('p')
const divbutonFormular1 = create('div')
const butonFormular1 = create('button')

const formular2 = create('div')
const headerFormular2 = create('div')
const headerFormular2H1 = create('div')
const headerFormular2H3 = create('div')
const containerInput2 = create('div')
const input21 = create('input')
const errorInput21 = create('p')
const input22 = create('input')
const errorInput22 = create('p')
const input23 = create('input')
const errorInput23 = create('p')
const divbutonFormular2 = create('div')
const butonFormular21 = create('button')
const butonFormular22 = create('button')

const formular3 = create('div')
const headerFormular3 = create('div')
const headerFormular3H1 = create('div')
const headerFormular3H3 = create('div')
const containerInput3 = create('div')
const input31 = create('input')
const errorInput31 = create('p')
const input32 = create('input')
const errorInput32 = create('p')
const input33 = create('input')
const errorInput33 = create('p')
const divbutonFormular3 = create('div')
const butonFormular31 = create('button')
const butonFormular32 = create('button')


body.prepend(background)
background.append(progressBarr)

progressBarr.append(squareBar1)
squareBar1.append(numberSquare1)
squareBar1.append(textSquare1)
progressBarr.append(lineBar1)
progressBarr.append(squareBar2)
squareBar2.append(numberSquare2)
squareBar2.append(textSquare2)
progressBarr.append(lineBar2)
progressBarr.append(squareBar3)
squareBar3.append(numberSquare3)
squareBar3.append(textSquare3)
background.append(allForms)

allForms.append(formular1)
formular1.append(headerFormular1)
headerFormular1.append(headerFormular1H1)
headerFormular1.append(headerFormular1H3)
formular1.append(containerInput1)
containerInput1.append(input11)
containerInput1.append(errorInput11)
containerInput1.append(input12)
containerInput1.append(errorInput12)
containerInput1.append(input13)
containerInput1.append(errorInput13)
formular1.append(divbutonFormular1)
divbutonFormular1.append(butonFormular1)

allForms.append(formular2)
formular2.append(headerFormular2)
headerFormular2.append(headerFormular2H1)
headerFormular2.append(headerFormular2H3)
formular2.append(containerInput2)
containerInput2.append(input21)
containerInput2.append(errorInput21)
containerInput2.append(input22)
containerInput2.append(errorInput22)
containerInput2.append(input23)
containerInput2.append(errorInput23)
formular2.append(divbutonFormular2)
divbutonFormular2.append(butonFormular21)
divbutonFormular2.append(butonFormular22)

allForms.append(formular3)
formular3.append(headerFormular3)
headerFormular3.append(headerFormular3H1)
headerFormular3.append(headerFormular3H3)
formular3.append(containerInput3)
containerInput3.append(input31)
containerInput3.append(errorInput31)
containerInput3.append(input32)
containerInput3.append(errorInput32)
containerInput3.append(input33)
containerInput3.append(errorInput33)
formular3.append(divbutonFormular3)
divbutonFormular3.append(butonFormular31)
divbutonFormular3.append(butonFormular32)


background.classList.add('backgroundClass')

progressBarr.classList.add('progressBarrClass')
squareBar1.classList.add('squareBarClass')
squareBar1.classList.add('currentPassProgressBarrClass')
squareBar2.classList.add('squareBarClass')
squareBar3.classList.add('squareBarClass')
lineBar1.classList.add('lineBarClass')
lineBar2.classList.add('lineBarClass')
textSquare1.classList.add('textSquare')
textSquare2.classList.add('textSquare')
textSquare3.classList.add('textSquare')

allForms.classList.add('allFormsClass')

formular1.classList.add('formularClass')
headerFormular1.classList.add('headerFormularClass')
headerFormular1H1.classList.add('headerFormularHClass')
headerFormular1H3.classList.add('headerFormularHClass')
containerInput1.classList.add('containerInput1Class')
butonFormular1.classList.add('butonFormular1Class')
divbutonFormular1.classList.add('divbutonFormular1Class')

formular2.classList.add('formularClass')
headerFormular2.classList.add('headerFormularClass')
headerFormular2H1.classList.add('headerFormularHClass')
headerFormular2H3.classList.add('headerFormularHClass')
containerInput2.classList.add('containerInput1Class')
butonFormular21.classList.add('butonFormularPreviousClass')
butonFormular22.classList.add('butonFormular1Class')
divbutonFormular2.classList.add('divbutonFormular1Class')

formular3.classList.add('formularClass')
headerFormular3.classList.add('headerFormularClass')
headerFormular3H1.classList.add('headerFormularHClass')
headerFormular3H3.classList.add('headerFormularHClass')
containerInput3.classList.add('containerInput1Class')
butonFormular31.classList.add('butonFormularPreviousClass')
butonFormular32.classList.add('butonFormular1Class')
divbutonFormular3.classList.add('divbutonFormular1Class')

formular1.classList.add('active')
formular1.classList.add('animationDuration')
formular2.classList.add('animationDuration')
formular3.classList.add('animationDuration')
formular1.classList.add('animationDelay')
formular2.classList.add('animationDelay')
formular3.classList.add('animationDelay')
formular1.classList.add('fadeIn')
formular2.classList.add('fadeRight')
formular3.classList.add('fadeRight')


numberSquare1.textContent = '1'
textSquare1.textContent = 'ACCOUNT SETUP'
numberSquare2.textContent = '2'
textSquare2.textContent = 'SOCIAL PROFILES'
numberSquare3.textContent = '3'
textSquare3.textContent = 'PROFESIONAL DETAILS'

headerFormular1H1.textContent = 'CREATE YOUR ACCOUNT'
headerFormular1H3.textContent = 'This is step 1'
butonFormular1.textContent = 'Next'

headerFormular2H1.textContent = 'SOCIAL PROFILES'
headerFormular2H3.textContent = 'Your aperence on social media'
butonFormular22.textContent = 'Next'
butonFormular21.textContent = 'Previous'

headerFormular3H1.textContent = 'PERSONAL DELATELES'
headerFormular3H3.textContent = 'We will never sell it'
butonFormular32.textContent = 'Submit'
butonFormular31.textContent = 'Previous'

butonFormular32.classList.add('submit')

input11.setAttribute('placeHolder', 'Email')
input12.setAttribute('type', 'password')
input13.setAttribute('type', 'password')
input12.setAttribute('placeHolder', 'Password')
input13.setAttribute('placeHolder', 'Confirm Password')
input12.setAttribute('autocomplete', 'new-password')
input13.setAttribute('autocomplete', 'new-password')

input21.setAttribute('placeHolder', 'Twitter')
input22.setAttribute('placeHolder', 'Facebook')
input23.setAttribute('placeHolder', 'Instagram')

input31.setAttribute('placeHolder', 'First Name')
input32.setAttribute('placeHolder', 'Second Name')
input33.setAttribute('placeHolder', 'Phone Example: 68092457')


const formulare = [formular1, formular2, formular3]

let cureent = formulare.findIndex(step => {
    return step.classList.contains('active')
})

const allInputs = [...selectAll('input')]

allForms.addEventListener('click', (event) => {

    let countInputs = 0
    allInputs.forEach(item => {
        if (formulare[cureent].contains(item) && item.value !== '') {
            countInputs++
        }
    })

    if (event.target.classList[0] === 'butonFormular1Class') {

        if (input11.value.includes('@gmail.com') && input11.value === input11.value.toLowerCase() && input11.value[0] != Number(input11.value[0])) {
            input11.classList.remove('errorInput')
            input11.nextElementSibling.classList.remove('active')

            if (input12.value.length > 8 && input12.value !== input12.value.toLowerCase()) {
                input12.classList.remove('errorInput')
                input12.nextElementSibling.classList.remove('active')
                let numberPresence = false
                for (let i = 0; i < input12.value.length; i++) {

                    if (input12.value.charCodeAt(i) >= 48 && input12.value.charCodeAt(i) <= 57) {
                        numberPresence = true
                    }
                    if (numberPresence === true) {
                        break
                    }
                }
                if (numberPresence === true) {
                    input12.classList.remove('errorInput')
                    input12.nextElementSibling.classList.remove('active')

                    if (countInputs === 3 && input12.value === input13.value) {
                        formulare[cureent].classList.remove('active')
                        cureent += 1
                        formulare[cureent].classList.add('active')
                    }
                    allInputs.forEach(item => {

                        if (countInputs !== 3 && formulare[cureent].contains(item) && item.value === '') {
                            item.classList.add('errorInput')
                            item.nextElementSibling.textContent = 'This fild can not be empty'
                            item.nextElementSibling.classList.add('active')
                        } else if (input12.value !== input13.value) {
                            input13.classList.add('errorInput')
                            input13.nextElementSibling.textContent = 'Your Password is not equal with Confirm Password'
                            input13.nextElementSibling.classList.add('active')

                        }
                        allForms.addEventListener('keyup', () => {

                            if (item.value !== '') {
                                item.classList.remove('errorInput')
                                item.nextElementSibling.classList.remove('active')
                            }
                        })


                    })
                } else {
                    input12.classList.add('errorInput')
                    input12.nextElementSibling.textContent = 'Password should contain at least 1 number'
                    input12.nextElementSibling.classList.add('active')
                }
            } else {
                input12.classList.add('errorInput')
                input12.nextElementSibling.textContent = 'Password should contain minimum 8 characters/one Upercase letter'
                input12.nextElementSibling.classList.add('active')

            }
        } else {
            input11.classList.add('errorInput')
            input11.nextElementSibling.textContent = 'Invalid email'
            input11.nextElementSibling.classList.add('active')
        }
    }

    if (event.target.classList[0] === 'butonFormularPreviousClass') {
        formulare[cureent].classList.remove('active')
        cureent -= 1
        formulare[cureent].classList.add('active')
    }

    if (cureent === 1) {
        squareBar2.classList.add('patratLineProgrees')
        lineBar1.classList.add('patratLineProgrees')
        squareBar3.classList.remove('patratLineProgrees')
        lineBar2.classList.remove('patratLineProgrees')
    } else if (cureent === 2) {
        squareBar3.classList.add('patratLineProgrees')
        lineBar2.classList.add('patratLineProgrees')

    } else if (cureent === 0) {
        squareBar2.classList.remove('patratLineProgrees')
        lineBar1.classList.remove('patratLineProgrees')
    }

})

input33.addEventListener('input', (event) => {
    let result = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (!result[2]) {
        event.target.value = result[1];

    } else {
        event.target.value = '+' + result[1] + ' (' + result[2] + ') ' + result[3];
        if (result[4]) {
            event.target.value += ' ' + result[4];

        }
        if (result[5]) {
            event.target.value += ' ' + result[5];

        }
    }
})





