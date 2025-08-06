const container = document.querySelector('.container');

const promptBtn = document.createElement('button');
promptBtn.classList.add('promptBtn');
promptBtn.textContent = "Change sketch pad dimensions";

promptBtn.addEventListener("onclick", () => {
    const dimensions = Number(prompt("Enter the number of SQUARES per side do you want the sketch pad to have? \n You are limited to 100", "5"));
    if (dimensions !== NaN && dimensions <= 100 && dimensions > 0) {
        container.innerHTML = '';
    } else {
        window.alert("Error: Invalid input.");
    }
});

document.body.insertBefore(promptBtn, container);

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

