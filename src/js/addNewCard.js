const feeld = document.querySelectorAll('.main-block');
const inputBlock = document.querySelector('.input-block');
const inputText = document.querySelector('.input-block__input-card__input');
const inputBut = document.querySelector('.input-block__input-card__but');
const removeBut = document.querySelector('.input-block__input-card__but2');
let generatedCard;
/* const addBut = document.querySelectorAll('.main-block__footer') */

/* feeld.addEventListener('click', () => {
    console.log('123')
}); */

/* console.log(feeld) */

feeld.forEach(f => {
    f.addEventListener('click', (e) => {
        /* console.log(e.target.getAttribute("class")); */
        /* console.log(f); */
        const btm = e.target.getAttribute("class");
        if (btm == 'main-block__footer') {
            addTheCard(f);
        }
    });
});


/* function addTheCard(block) {
    console.log(block);
    console.log(block.childNodes[3]);
    inputBlock.classList.remove('visually-hidden');
    inputBut.addEventListener('click', () => {
        
        let cart = document.createElement('div');
        cart.classList.add('main-block__doby__task-card');
        cart.innerText = inputText.value;
        
        block.childNodes[3].appendChild(cart);
        console.log(typeof block);
        inputText.value = '';
       
        inputBlock.classList.add('visually-hidden');
    })
}; */



function addTheCard(block) {
/*     console.log(block);
    console.log(block.childNodes[3]); */
    inputBlock.classList.remove('visually-hidden');
    generatedCard = block;
};


inputBut.addEventListener('click', () => {
    try {
        if (inputText.value != '') {
            let cart = document.createElement('div');
            let close = document.createElement('div');
            cart.classList.add('main-block__doby__task-card');
            close.classList.add('main-block__doby__task-card__remove');
            /* console.log(close) */
            cart.innerText = inputText.value;
            generatedCard.querySelector('.main-block__doby').appendChild(cart);
            cart.appendChild(close);
            inputText.value = '';
            inputBlock.classList.add('visually-hidden');
        }  else {
            alert('Введите задачу в поле');
        }
    } catch (error) {
        console.log('Непредвиденная ошибка');
        console.log(error);
    }
});

removeBut.addEventListener('click', () => {
    inputText.value = '';
    inputBlock.classList.add('visually-hidden');
})