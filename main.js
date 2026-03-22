import { Point } from "./js/points.js";
import { Line } from "./js/lines.js"
import { Triangle } from "./js/triangles.js";
import { Shape, Cube, Letter, Letter5, allLetters } from "./js/shapes.js";
import { rotateGraph, outputtedShapeZ, outputtedShapeX, outputtedShapeY, outputtedShape, vectorGraph, graphing, grapherParametricEqu, grapherEqu, vectorGraphing, setUniversalAdder, universalAdder, universalEquation } from "./js/calculator.js";
import {canvas, ctx, max, cw, ch, camera, factor} from "./js/scene.js"

function changeCameraPos(pos) {
    camera.pos = pos
    for (let i in Point.all) {
        Point.all[i].changeRealPosNoAdding(Point.all[i].posReal)
    }
    for (let i in Line.all) {
        Line.all[i].updateLine();
    }
}

/*let hsphere = new HyperSphere([0, 0, 0], 5);
hsphere.makePoints(0);
let adder = 1 / 30;
setInterval(() => {
    hsphere.makePoints(adder-=1/30);
    hsphere.rotateByPointXYZ(-adder, adder, adder, hsphere.center)
}, 10)*/

addEventListener('keydown', (e) => {

    switch (e.key) {
        case 'w':
            /*if (graphing) rotateGraph(1 / 30, 0, 0);
            if (vectorGraph) r.rotateByPointXYZ(1 / 30, 0, 0, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) {
                            allLetters[i].rotateByPointXYZ(1 / 30, 0, 0, r.center);
                        }
                    }
                }
            };*/
            changeCameraPos([camera.pos[0], camera.pos[1], camera.pos[2] + 1])
            break;
        case 's':
            /*if (graphing) rotateGraph(-1 / 30, 0, 0);
            if (vectorGraph) r.rotateByPointXYZ(-1 / 30, 0, 0, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(-1 / 30, 0, 0, r.center)
                    }
                }
            };*/
            changeCameraPos([camera.pos[0], camera.pos[1], camera.pos[2] - 1])
            break;
        case 'q':
            if (graphing) rotateGraph(0, 0, -1 / 30);
            if (vectorGraph) r.rotateByPointXYZ(0, 0, -1 / 30, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(0, 0, -1 / 30, r.center)
                    }
                }
            };
            break;
        case 'e':
            if (graphing) rotateGraph(0, 0, 1 / 30);
            if (vectorGraph) r.rotateByPointXYZ(0, 0, 1 / 30, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(0, 0, 1 / 30, r.center)
                    }
                }
            };
            break;
        case 'a':
            /*if (graphing) rotateGraph(0, -1 / 30, 0);
            if (vectorGraph) r.rotateByPointXYZ(0, -1 / 30, 0, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(0, -1 / 30, 0, r.center)
                    }
                }
            };*/
            changeCameraPos([camera.pos[0] - 1, camera.pos[1], camera.pos[2]])
            break;
        case 'd':
            /*if (graphing) rotateGraph(0, 1 / 30, 0);
            if (vectorGraph) r.rotateByPointXYZ(0, 1 / 30, 0, r.center);
            if (graphing || vectorGraph) {
                for (let i in allLetters) {
                    if (r) {
                        if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(0, 1 / 30, 0, r.center)
                    }
                }
            };*/
            changeCameraPos([camera.pos[0] + 1, camera.pos[1], camera.pos[2]])
            break;
        case 'ArrowDown':
            changeCameraPos([camera.pos[0], camera.pos[1] + 1, camera.pos[2]])
            break;
        case 'ArrowUp':
            changeCameraPos([camera.pos[0], camera.pos[1] - 1, camera.pos[2]])
            break;
    }

});
let clickStarted = false;
let postition = [];
canvas.addEventListener('click', (e) => {
    if (!clickStarted) {
        postition = [e.x, e.y]
    }
    else {
        postition = [];
    }
    clickStarted = !clickStarted;
})
canvas.addEventListener('mousemove', (e) => {
    if (clickStarted) {
        if (graphing) rotateGraph(-(e.y - postition[1]) / 300, -(e.x - postition[0]) / 300, 0);
        if (vectorGraph) outputtedShape.rotateByPointXYZ(-(e.y - postition[1]) / 300, -(e.x - postition[0]) / 300, 0, outputtedShape.center)
        if (graphing || vectorGraph) {
            for (let i in allLetters) {
                if (r) {
                    if (allLetters[i].rotate) allLetters[i].rotateByPointXYZ(-(e.y - postition[1]) / 300, -(e.x - postition[0]) / 300, 0, outputtedShape.center)
                }
            }
        }
        postition = [e.x, e.y]
    }
})

//console.log(new Point([0,0,-1], true, "rgb(255, 0, 0)", 1));
//console.log(new Point([0,0,-9], true, "rgb(255, 0, 0)", 1));

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgb(25, 28, 35)';
    ctx.fillRect(0, 0, cw, ch);
    for (let i in Point.all) {
        Point.all[i].draw();
    }
    for (let i in Line.all) {
        Line.all[i].draw();
    }
    for (let i in Triangle.all) {
        Triangle.all[i].draw();
    }
}

animate()

//sqrt(((x*x)+((x**2)**2))/((Math.tan(Math.atan((x**2)/x)+90)**2)+1)),y, -Math.tan(Math.atan((x**2)/x)+90)*sqrt(((x*x)+((x**2)**2))/((Math.tan(Math.atan((x**2)/x)+90)**2)+1))

//vectorGraphing('cos(x)','0','sin(x)');
grapherParametricEqu("(5*sin(x))*cos(y),(5*sin(x))*sin(y),5*cos(x)", 5, 0.2);
//grapherEqu('(sqrt((x^2)+(y^2)))-5');
//grapherEqu('x^2 + y^2 - 5')
// for vectors (x)/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - (x)/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 ), (y)/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - (y)/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 ), ((z-1))/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - ((z+1))/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 )
//universalEquation = '(sqrt((x**2)+(y**2)))-5';*/
/*parametricLineGraphing(
    '(x)/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - (x)/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 )',
    '(y)/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - (y)/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 )',
    '((z-1))/( (x*x + y*y + (z-1)*(z-1) + 0.1)**1.5 )  - ((z+1))/( (x*x + y*y + (z+1)*(z+1) + 0.1)**1.5 )',
    0.25
)*/
//parametricLineGraphing('sin(t)+2*sin(2*t)','cos(t)-2*cos(2*t)','-sin(3*t)') // Trinity knot
//parametricLineGraphing('cos(t)','sin(t)','t/2') //helix
//parametricLineGraphing('(4+cos(15*t))*cos(t)', 'sin(15*t)', '(4+cos(15*t))*sin(t)') // helix torus
