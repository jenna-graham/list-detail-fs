export function renderChild(child) {
    const div = document.createElement('div');
    div.classList.add('child');
    div.style.top = child.top;
    div.style.bottom = child.bottom

    const h1 = document.createElement('h1');
    h1.textContent = child.name;

    const img = document.createElement('img');
    img.src = child.image;

    

    
    div.append(h1, img,);
    return div;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}