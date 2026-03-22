let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let ch = canvas.height = innerHeight;
let cw = canvas.width = innerWidth;

let camera = {
    pos: [0, 0, -10],
}

let max = 3;
let factor = cw / (max * 2);

function setMax(value){max=value};

export {
    cw,
    ctx,
    max,
    setMax,
    camera,
    factor,
    canvas, 
    ch
}
