
const screen = document.querySelector('#screen');
const generate = document.querySelector('#generate');

generate.addEventListener('click', () => {
    size = prompt('');
    removeGrid();
    createGrid();
    screen.style.border = "1px solid black";  
})


function createGrid () {
    for (let i = 0; i < size*size; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'black';
    });
    div.style.height = `${600/size}px`;
    div.style.width = `${600/size}px`;
    screen.appendChild(div);
    }   
}


function removeGrid () {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.remove());
}





