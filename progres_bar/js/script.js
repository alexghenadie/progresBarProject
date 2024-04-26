const select = (selector) => {
    return document.querySelector(selector)
}
const selectAll = (selector) => {
    return document.querySelectorAll(selector)
}

const form = select('.form')
const divContainer = [...selectAll('.chestionar')];
const baraPatrat1 = selectAll('.unu')


// const button = selectAll('.button')
// console.log(button)



let cureent = divContainer.findIndex(step =>{
    return step.classList.contains('active')
})
console.log(cureent)


if (cureent === -1){
    cureent = 0;

}

form.addEventListener('click', (event) => {

    if (event.target.classList[0] === 'next') {
        divContainer[cureent].classList.remove('active')
        baraPatrat1.forEach(item =>{
            item.classList.remove('unu')
        })

        cureent += 1
        divContainer[cureent].classList.add('active')
    } else if (event.target.classList[0] === 'previous') {
        divContainer[cureent].classList.remove('active')
        baraPatrat1.forEach(item =>{
            item.classList.add('unu')
        })
        cureent -= 1
        divContainer[cureent].classList.add('active')
    }
    console.log(cureent)




    // console.log(counter)

})
