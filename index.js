const container = document.querySelector('.container');

function onEnter(event){
    event.target.style.backgroundColor = "red";
}

function onLeave(event){
    event.target.style.backgroundColor = "#ffffff";
}

for (let i = 0; i < 17; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 17; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mouseenter", onEnter);
        cell.addEventListener("mouseleave", onLeave);
        row.appendChild(cell);
    }

    container.appendChild(row);
}

