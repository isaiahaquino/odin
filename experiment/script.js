const container = document.querySelector('#container');

const red = document.createElement('p');
red.textContent = "Hey im red!";
red.style.color = 'red';
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = 'blue';
container.appendChild(blue);

const pink = document.createElement('div');
pink.style.border = '1px solid black';
pink.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
pink.appendChild(h1);
const p = document.createElement('p');
p.textContent = 'ME TOO!';
pink.appendChild(p);

container.appendChild(pink);