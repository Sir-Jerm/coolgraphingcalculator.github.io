import { Point } from "./points.js";
import { ch, factor, max } from "./scene.js";

let distanceFunc = (x1, y1, z1, x2, y2, z2, equation) => {
    return usableEquation(equation).evaluate({x1:x1,y1:y1,z1:z1,x2:x2,y2:y2,z2:z2})
}

//string -> evaluate

function usableEquation(expression) {
    return math.parse(expression).compile()
}
console.log(usableEquation("sqrt((x1-x2)^2+(y1-y2)^2+(z1-z2)^2)").evaluate({x1:0,y1:0,z1:0,x2:1,y2:1,z2:1}));

function manhattanDistance(x1, y1, z1, x2, y2, z2) {
    
    return Math.abs((x1 - x2)) + Math.abs((y1 - y2)) + Math.abs(z1-z2);
}
/*function myParabolicDistance(x1, y1, x2, y2) {
    //xP and yP can be any value
    let xP = 1; let yP = 1;
    let a = ((yP * x2) - (xP * y2)) / ((xP * xP * x2) - (xP * x2 * x2));
    let b = (yP - x2 + (a * x2 * x2) - (a * xP * xP)) / (xP - x2);
    //let c = y2-b*x2-a*x2*x2;
    function mokt(x) {
        let lop = (2 * a * x) + b;
        let k = Math.sqrt(((lop) ** 2) + 1);
        return (Math.log(k + lop) / (4 * a)) + ((x / 2) + (b / (4 * a))) * k;
    }
    return Math.abs(mokt(x1) - mokt(x2));
}*/
function chebyshevDistance(x1, y1, z1, x2, y2, z2) {
    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2), Math.abs(z1-z2));
}
/*function cosineSimilarityDistance(x1, y1, x2, y2) {
    return 1 - (((x1 * x2) + (y1 * y2)) / (Math.sqrt((x1 * x1) + (y1 * y1)) * Math.sqrt((x2 * x2) + (y2 * y2))))
}
function angularDistance(x1, y1, x2, y2) {
    return Math.abs(Math.atan2(y2, x2) - Math.atan2(y1, x1))
}
function logarithmicDistance(x1, y1, x2, y2) {
    return Math.log10(1 + Math.abs(x2 - x1) + Math.abs(y2 - y1));
}
function expDistance(x1, y1, x2, y2) {
    return Math.exp(-Math.abs(x2 - x1) - Math.abs(y2 - y1));
}*/


function euclidNorm(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2) + ((z1-z2) ** 2))
}

let universalMetric = "sqrt(((x1 - x2) ^ 2) + ((y1 - y2) ^ 2) + ((z1-z2) ^ 2))"

function determineNewCoords(x, y, z) {
    let norm = euclidNorm(0,0,0,x,y,z)
    let d = (norm/distanceFunc(0,0,0,x,y,z, universalMetric))
    if(!d) d=0;
    return [d*x,d*y,d*z];
}

let setMetric=(value)=>{universalMetric=value};

export{determineNewCoords,universalMetric,setMetric}
