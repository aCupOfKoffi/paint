'use strict'

const canvasWidth = 400,
    canvasHeight = 400;

let canvas = document.getElementById('canvas'),
canvasContext = canvas.getContext('2d'),
    x,
    isDrawing = false,
    y,
    brushWeight = 1,
    brushColor = 'black',
    colorList = document.querySelectorAll('li.brushColor');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    for (let i = 0; i < colorList.length; i++){
            colorList[i].addEventListener('click', e => {
            brushColor = colorList[i].getAttribute('data-color');
            canvasContext.strokeStyle = brushColor;
        });
    }

    canvasContext.lineCap = 'round';
// canvas.addEventListener("click", (event) => {
//     let red = Math.random() * 255,
//     blue = Math.random() * 255,
//     green = Math.random() * 255;
//     canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;

//     x = event.clientX;
//     y = event.clientY;
//     console.log(x, y);
//     canvasContext.beginPath();
//     canvasContext.arc(x, y, 10, 0, 2 * Math.PI);
//     canvasContext.fill();
// });

canvas.addEventListener("mousedown", (event) => {
    x = event.offsetX;
    y = event.offsetY;
    console.log(x, y);
        canvasContext.beginPath();
        canvasContext.arc(x, y, 1, 0, 2 * Math.PI);
        canvasContext.fill();
    isDrawing = true;
});


canvas.addEventListener('mouseup', e => {
    if (isDrawing == true) {
        (canvasContext, x, y, e.offsetX, e.offSetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});


canvas.addEventListener('mousemove', e => {

    if (isDrawing == true) {
        console.log(brushColor);
        canvasContext.beginPath();
        
    canvasContext.lineWidth = brushWeight;
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(e.offsetX, e.offsetY);
        canvasContext.stroke();
        canvasContext.fill();
        x = e.offsetX;
        y = e.offsetY;
    }
});

let stringWeight = document.getElementById('stringWeight');

stringWeight.value = brushWeight;

stringWeight.addEventListener('change', e => {
    brushWeight = +e.target.value;
});




//     a = Math.random() * 400,
//     b = Math.random() * 400,
//     c = Math.random() * 400,
//     d = Math.random() * 400,
//     red,
//     blue,
//     green,




//     canvasContext.fillRect(100, 100, 20, 20);
//     canvas.onclick = (event) => {
//         a = Math.random() * 400,
//         b = Math.random() * 400,
//         c = Math.random() * 400,
//         d = Math.random() * 400,
//         canvas.height = canvasHeight;
//         canvas.width = canvasWidth;
//         canvasContext.fillStyle = 'red';
//         canvasContext.beginPath();
//         canvasContext.moveTo(a, b);
//         canvasContext.lineTo(c, d);
//         canvasContext.lineTo(d, c);
//         canvasContext.closePath();
//         canvasContext.fill();
    //     console.log(event);
    //         a = Math.random() * 400,
    //         b = Math.random() * 400,
    //         red = Math.random() * 255,
    //         blue = Math.random() * 255,
    //         green = Math.random() * 255;
    // canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;

            // console.log(a,' ', b)
            // canvasContext.clearRect(0, 0, 400, 400);
            // canvasContext.fillRect(a, b, 20, 20);

        

    // };