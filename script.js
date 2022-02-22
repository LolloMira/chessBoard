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
            square.className = 'squares' +(i%2)+(j%2);
            // if (i% 2 !== 0) {
            //     if (j % 2 !== 0) {
            //         square.style.backgroundColor = '#9D776A';
            //     } else{
            //         square.style.backgroundColor = '#EBD8BA';
            //     }
            // } else {
            //     if (j % 2 === 0) {
            //         square.style.backgroundColor = '#9D776A';
            //     } else{
            //         square.style.backgroundColor = '#EBD8BA';
            //     }
            // }
            cells.push(square);
            line.appendChild(square);
        }
    }

    let body = document.getElementsByTagName('body')[0]
    body.appendChild(container);
    requestAnimationFrame(() => animate(0));
}


    

function animate(time){
    let change = true;
    realtime = time/20

    let index = Math.floor(realtime) % cells.length;

    // if (cells[index - 1]) {
    //     cells[index - 1].style.backgroundColor = '';
    // } else {
    //     cells[cells.length - 1].style.backgroundColor = '';
    // }
    
    

    requestAnimationFrame(() => animate(time + 1))
}

