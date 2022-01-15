const screen = document.querySelector('#screen');
const generate = document.querySelector('#generate');
let size = 0;

function getSize () {
    size = prompt('Enter grid size (example: 16 gives you a 16x16 grid).');
    if (isNaN(size) || size < 1 || size > 99 || size % 1 != 0) {
        alert('The grid size must be an integer between 1 and 100.')
        getSize();
    }
}

generate.addEventListener('click', () => {
    getSize();
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
    div.style.height = `${900/size}px`;
    div.style.width = `${900/size}px`;
    screen.appendChild(div);
    }   
}


function removeGrid () {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.remove());
}





