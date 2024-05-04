const select = (selector) => {
    return document.querySelector(selector);
}
const create = (selector) => {
    return document.createElement(selector);
}

const body = select('body');
const divBackGround = create('div');
const divCaseta = create('div');
const divCasetaTitle = create('div');
const divInputArea = create('div');
const divTextArea = create('textarea');
const divPlusButton = create('button');
const divNewTask = create('div')


body.prepend(divBackGround);
divBackGround.append(divCaseta);
divCaseta.append(divCasetaTitle);
divCaseta.append(divInputArea);
divInputArea.append(divTextArea);
divInputArea.append(divPlusButton);
divCaseta.append(divNewTask)


divBackGround.classList.add('backGroundContainer');
divCaseta.classList.add('caseta');
divCasetaTitle.classList.add('casetaTitle');
divTextArea.classList.add('textArea');
divInputArea.classList.add('imputArea');
divPlusButton.classList.add('plusButton');
divNewTask.classList.add('newTaskContainer')


divTextArea.setAttribute('placeHolder', 'Add New Task');


divCasetaTitle.textContent = 'TO DO LIST';
divPlusButton.textContent = '+'


divPlusButton.addEventListener('click', () => {
    const input = select('textArea')
    if (input.value !== '') {

        const newTask = create('div')
        const radio = create('input')
        const label = create('label')
        const text = create('span')
        const divSpan = create('div')
        const divTextTrash = create('div')
        const trash = create('div')
        const trashButton = create('i')

        radio.setAttribute('type', 'checkbox')

        label.append(radio)
        divNewTask.append(newTask)
        newTask.append(label)
        divSpan.append(text)
        divTextTrash.append(divSpan)
        trash.append(trashButton)
        divTextTrash.append(trash)
        newTask.append(divTextTrash)

        newTask.classList.add('newTask')
        trashButton.classList.add('fa')
        trashButton.classList.add('fa-trash')
        trash.classList.add('trashClass')
        divTextTrash.classList.add('textTrash')

        text.textContent = input.value

        text.addEventListener('click', () => {
            text.classList.toggle('textLine')
            if (radio.checked === false){
                radio.checked = true
            }else if (radio.checked === true){
                radio.checked = false
            }

            radio.classList.toggle('button')
            radio.classList.toggle('click')


        })
        radio.addEventListener('click', () => {
            text.classList.toggle('textLine')
            radio.classList.toggle('button')
            radio.classList.toggle('click')


        })
        trash.addEventListener('click', () =>{
            divNewTask.removeChild( trash.parentNode.parentNode)
        })

    }
    input.value = ''
})








