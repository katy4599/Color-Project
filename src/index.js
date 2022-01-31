const message = document.getElementById('message');
const colors = [
    '#011627',
    '#FDFFFC',
    '#2EC4B6',
    '#E71D36',
    '#FF9F1C',
];

let i = 4;

function changeColor() {
    const color = colors[i];
    message.style.color = color;
    i -= 1;
    if (i == 0) {
        i = 4;
    }
}

message.addEventListener('click', changeColor);