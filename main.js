let btn = document.querySelector("button").addEventListener("click", changeSize)
let li = document.querySelectorAll('li');
let fontSize = 10;

function changeSize() {
    fontSize++;
    for (let posNumber = 0; posNumber < li.length; posNumber++) {
        li[posNumber].style.display = 'block';
        li[posNumber].style.fontSize = `${fontSize}px`;

    }

}