import { findById } from '../utils.js';
import { children } from '../children.js';

console.log('hello from children detail page!');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const child = findById(params.get('id'), children);
console.log(child);

const childDiv = document.getElementById('child-div');

const childName = document.createElement('h2');
childName.textContent = child.name;

childDiv.append(childName);

const childImage = document.createElement('img');
childImage.src = `.${child.image}`;

const p = document.createElement('p');
p.textContent = `${child.name} is ${child.age} years old and loves to eat ${child.favoriteFood}!`;

const h2 = document.createElement('h2');
h2.textContent = `${child.name} likes to:`;

const ul = document.createElement('ul');
for (let hobby of child.hobbies) {
    const li = document.createElement('li');
    li.textContent = hobby;
    ul.append(li);
}
childDiv.append(childName, childImage, p, h2, ul);