let cells = [];





function parse(string) {
    let number = parseInt(string)
    let divToDestroy = document.getElementById('main-contain')
    if (divToDestroy) {
        divToDestroy.remove();
    }
    chessBoard(number);
}

function chessBoard(number) {
    let container = document.createElement('div')
    container.setAttribute('id', 'main-contain')
    for (let i = 1; i <= number; i++) {
        let line = document.createElement('div')
        line.className = 'line-contain'
        container.appendChild(line);
        for (let j = 1; j <= number; j++) {
            let square = document.createElement('div');
            square.className = 'squares';
            if (i% 2 !== 0) {
                if (j % 2 !== 0) {
                    square.style.backgroundColor = 'rgb(0, 255, 0)';
                } else{
                    square.style.backgroundColor = 'rgb(250, 79, 132)';
                }
            } else {
                if (j % 2 === 0) {
                    square.style.backgroundColor = 'rgb(0, 255, 0)';
                } else{
                    square.style.backgroundColor = 'rgb(250, 79, 132)';
                }
            }
            cells.push(square);
            line.appendChild(square);
        }
    }

    let body = document.getElementsByTagName('body')[0]
    body.appendChild(container);
    requestAnimationFrame(() => animate(0));
    //requestAnimationFrame((incremental) => baseAnimation(incremental, 0));
}


    

// function animate(time){
//     let index = time % cells.length;

//     let colorGradient = 1 / cells.length;
//     let step = 0 + colorGradient * index;
    
//     cells[index].style.backgroundColor ="rgba("+ 255 + ", 0, 0,"+step+" )";
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].style.transform = 'rotate('+ time +'deg)'; 
//     }

    
//     requestAnimationFrame(() => animate(time + 1))
    

// }

function animate(time){
    
    if (time % 15 === 0) {
        for (const cell of cells) {
            cell.style.backgroundColor = cell.style.backgroundColor === 'rgb(0, 255, 0)' ? 'rgb(250, 79, 132)' : 'rgb(0, 255, 0)';
        }
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.transform = 'rotate('+ time +'deg)'; 
    }
    let container = document.getElementById('main-contain');
    container.style.transform = 'rotate('+ time +'deg)'; 
    let lines = document.getElementsByClassName('line-contain');
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.transform = 'rotate('+ time +'deg)'; 
    }
    requestAnimationFrame(() => animate(time + 1))  
}





// function baseAnimation(incrementalTime, lastTime, counter) {

//     let delta = incrementalTime - lastTime;
//     lastTime = incrementalTime;


//     console.log(delta);
//     requestAnimationFrame((incremental) => baseAnimation(incremental, lastTime, counter + 1));
// }
