const container = document.querySelector('.container');

const promptBtn = document.createElement('button');
promptBtn.classList.add('promptBtn');
promptBtn.textContent = "Change sketch pad dimensions";

promptBtn.addEventListener("click", () => {
    const dimensions = Number(prompt("Enter the number of SQUARES per side you want the sketch pad to have? \n You are limited to 100", "5"));
    if (dimensions !== NaN && dimensions <= 100 && dimensions > 0) {
        container.innerHTML = "";
        tableCreation(dimensions);
    } else {
        window.alert("Error: Invalid input.");
    }
});

document.body.insertBefore(promptBtn, container);

function onEnter(event){
    event.target.style.backgroundColor = randomizeColor();
    if (event.target.style.opacity < 1) {
        event.target.style.opacity = +event.target.style.opacity + 0.1;
    }
}

function tableCreation(dimensions){
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${300/dimensions}px`;
    
        for (let j = 0; j < dimensions; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener("mouseenter", onEnter);
            row.appendChild(cell);
        }
    
        container.appendChild(row);
    }
}

function randomizeColor(){
    let finalColor = "#";
    for(let i = 0; i < 6; i++){
        let result = Math.floor((Math.random() * 16) + 1);
        if(result >= 10){
            result = String.fromCharCode(result + 55);
        }
        finalColor += result;
    }
    return finalColor;
}