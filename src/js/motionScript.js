const feeld = document.querySelectorAll('.main-block');
const activFeeld = document.querySelectorAll('.main-block__doby');
/* const removeBut = ocument.querySelectorAll('.main-block__doby__task-card__remove'); */
let actualElement;

const onMouseUp = (e) => {
    const bottomElement = e.target;
    const parentBox = bottomElement.parentElement;
    /* console.log(bottomElement.parentElement); */
    /* bottomElement.parentElement.insertBefore(actualElement, bottomElement); */
    if (parentBox.hasChildNodes() && parentBox.classList.contains('main-block__doby')) {
        parentBox.insertBefore(actualElement, bottomElement);
    }
    if (!bottomElement.hasChildNodes() && bottomElement.classList.contains('main-block__doby')) {
        bottomElement.appendChild(actualElement);
    }
    if (bottomElement.classList.contains('main-block__title')) {
        parentBox.querySelector('.main-block__doby').appendChild(actualElement);
    }
    actualElement.classList.remove('dragged');
    actualElement.querySelector('.main-block__doby__task-card__remove').classList.remove('draggedM');
    actualElement = undefined;
    document.documentElement.removeEventListener('mouseup', onMouseUp);
    document.documentElement.removeEventListener('mouseover', onMouseOver);
};

const onMouseOver = (e) => {
    actualElement.style.top = e.clientY + 'px';
    actualElement.style.left = e.clientX + 'px';
};

activFeeld.forEach(f => {
    f.addEventListener('mousedown', (e) => {

        e.preventDefault();
        if (!e.target.classList.contains('main-block__doby__task-card__remove')) {
            actualElement = e.target;
       /*  console.log(actualElement); */
       /* let check = actualElement.parentElement.querySelector('.main-block__doby'); */
        /* if (!actualElement.parentElement.classList.contains('main-block')) { */
            /* console.log(actualElement.parentElement); */
            actualElement.classList.add('dragged');
            /* console.log(actualElement.querySelector('.main-block__doby__task-card__remove')); */
            actualElement.querySelector('.main-block__doby__task-card__remove').classList.add('draggedM');
            /* console.log(actualElement.querySelector('.main-block__doby__task-card__remove')); */
        /* } */
        document.documentElement.addEventListener('mouseup', onMouseUp);
        document.documentElement.addEventListener('mouseover', onMouseOver);
        }
        
        
      /*   e.preventDefault();
        actualElement = e.target;
        if (actualElement.parentElement.hasChildNodes()) {
            actualElement.classList.add('dragged');
        } */
        
        

       /*  document.documentElement.addEventListener('mouseup', onMouseUp);
        document.documentElement.addEventListener('mouseover', onMouseOver); */
    })
});


/* removeBut.addEventListener('click', () => {
    console.log('asd');
}) */



activFeeld.forEach(f => {
    f.addEventListener('click', (e) => {
        if(e.target.classList.contains('main-block__doby__task-card__remove')) {
            e.target.parentElement.remove();
        }
    })
    
});