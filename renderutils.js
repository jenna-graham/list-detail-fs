export function renderChild(child) {
    const div = document.createElement('div');
    div.classList.add('child');
    
    const h1 = document.createElement('h1');
    h1.textContent = child.name;

    const img = document.createElement('img');
    img.src = child.image;

    

    
    div.append(h1, img,);
    return div;
}