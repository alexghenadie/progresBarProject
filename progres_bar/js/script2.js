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
const patratBar1 = create('div')
const nrPatrat1 = create('span')
const textPatrat1 = create('div')
const patratBar2 = create('div')
const nrPatrat2 = create('span')
const textPatrat2 = create('div')
const patratBar3 = create('div')
const nrPatrat3 = create('span')
const textPatrat3 = create('div')
const lineBar1 = create('div')
const lineBar2 = create('div')

const toateFormulare = create('div')

const formular1 = create('div')
const headerFormular1 = create('div')
const headerFormular1H1 = create('div')
const headerFormular1H3 = create('div')
const containerInput1 = create('div')
const input11 = create('input')
const input12 = create('input')
const input13 = create('input')
const divbutonFormular1 = create('div')
const butonFormular1 = create('button')

const formular2 = create('div')
const headerFormular2 = create('div')
const headerFormular2H1 = create('div')
const headerFormular2H3 = create('div')
const containerInput2 = create('div')
const input21 = create('input')
const input22 = create('input')
const input23 = create('input')
const divbutonFormular2 = create('div')
const butonFormular21 = create('button')
const butonFormular22 = create('button')

const formular3 = create('div')
const headerFormular3 = create('div')
const headerFormular3H1 = create('div')
const headerFormular3H3 = create('div')
const containerInput3 = create('div')
const input31 = create('input')
const input32 = create('input')
const input33 = create('input')
const divbutonFormular3 = create('div')
const butonFormular31 = create('button')
const butonFormular32 = create('button')


body.prepend(background)
background.append(progressBarr)

progressBarr.append(patratBar1)
patratBar1.append(nrPatrat1)
patratBar1.append(textPatrat1)
progressBarr.append(lineBar1)
progressBarr.append(patratBar2)
patratBar2.append(nrPatrat2)
patratBar2.append(textPatrat2)
progressBarr.append(lineBar2)
progressBarr.append(patratBar3)
patratBar3.append(nrPatrat3)
patratBar3.append(textPatrat3)
background.append(toateFormulare)

toateFormulare.append(formular1)
formular1.append(headerFormular1)
headerFormular1.append(headerFormular1H1)
headerFormular1.append(headerFormular1H3)
formular1.append(containerInput1)
containerInput1.append(input11)
containerInput1.append(input12)
containerInput1.append(input13)
formular1.append(divbutonFormular1)
divbutonFormular1.append(butonFormular1)

toateFormulare.append(formular2)
formular2.append(headerFormular2)
headerFormular2.append(headerFormular2H1)
headerFormular2.append(headerFormular2H3)
formular2.append(containerInput2)
containerInput2.append(input21)
containerInput2.append(input22)
containerInput2.append(input23)
formular2.append(divbutonFormular2)
divbutonFormular2.append(butonFormular21)
divbutonFormular2.append(butonFormular22)

toateFormulare.append(formular3)
formular3.append(headerFormular3)
headerFormular3.append(headerFormular3H1)
headerFormular3.append(headerFormular3H3)
formular3.append(containerInput3)
containerInput3.append(input31)
containerInput3.append(input32)
containerInput3.append(input33)
formular3.append(divbutonFormular3)
divbutonFormular3.append(butonFormular31)
divbutonFormular3.append(butonFormular32)


background.classList.add('backgroundClass')

progressBarr.classList.add('progressBarrClass')
patratBar1.classList.add('patratBarClass')
patratBar1.classList.add('currentPassProgressBarrClass')
patratBar2.classList.add('patratBarClass')
patratBar3.classList.add('patratBarClass')
lineBar1.classList.add('lineBarClass')
lineBar2.classList.add('lineBarClass')
textPatrat1.classList.add('textPatrat')
textPatrat2.classList.add('textPatrat')
textPatrat3.classList.add('textPatrat')

toateFormulare.classList.add('toateFormulareClass')

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


// formular2.classList.add('active')
// formular3.classList.add('active')





nrPatrat1.textContent = '1'
textPatrat1.textContent = 'ACCOUNT SETUP'
nrPatrat2.textContent = '2'
textPatrat2.textContent = 'SOCIAL PROFILES'
nrPatrat3.textContent = '3'
textPatrat3.textContent = 'PROFESIONAL DETAILS'

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


input11.setAttribute('placeHolder', 'User Name')
input12.setAttribute('placeHolder', 'Password')
input13.setAttribute('placeHolder', 'Confirm Password')
input12.setAttribute('type', 'password')
input13.setAttribute('type', 'password')

input21.setAttribute('placeHolder', 'Twitter')
input22.setAttribute('placeHolder', 'Facebook')
input23.setAttribute('placeHolder', 'Instagram')

input31.setAttribute('placeHolder', 'First Name')
input32.setAttribute('placeHolder', 'Second Name')
input33.setAttribute('placeHolder', 'Phone')





const formulare = [formular1,formular2,formular3]

let cureent = formulare.findIndex(step =>{
    return step.classList.contains('active')
})

console.log(cureent)

if (cureent === -1){
    cureent = 0;
}

toateFormulare.addEventListener('click', (event) =>{

    if (event.target.classList[0] === 'butonFormular1Class'){
        formulare[cureent].classList.remove('active')
        cureent +=1
        formulare[cureent].classList.add('active')
    }else if(event.target.classList[0] === 'butonFormularPreviousClass'){
        formulare[cureent].classList.remove('active')
        cureent -=1
        formulare[cureent].classList.add('active')
    }

    if (cureent === 1){
        patratBar2.classList.add('patratLineProgrees')
        lineBar1.classList.add('patratLineProgrees')
        patratBar3.classList.remove('patratLineProgrees')
        lineBar2.classList.remove('patratLineProgrees')

    }else if (cureent === 2){
        patratBar3.classList.add('patratLineProgrees')
        lineBar2.classList.add('patratLineProgrees')
    }else if (cureent === 0){
        patratBar2.classList.remove('patratLineProgrees')
        lineBar1.classList.remove('patratLineProgrees')
    }
})

