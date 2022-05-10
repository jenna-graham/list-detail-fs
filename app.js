import { children } from './children.js';
import { renderChild } from './renderutils.js';

console.log(children);

const childList = document.getElementById('children');

for (let child of children) {
    const childDiv = renderChild(child);
    childList.append(childDiv);
}
