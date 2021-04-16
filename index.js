const canvas = document.querySelector("canvas");
const $ = canvas.getContext("2d");
const W = canvas.width;
const H = canvas.height;
const paddle = {
    x: 10,
    y: H / 2 - 15,
    color: "RED",
    h: 30,
    w: 10,
    score: 0,
}
const paddleComp = {
    x: W - 20,
    y: H / 2 - 15,
    color: "blue",
    h: 30,
    w: 10,
    score: 0,
}
const goole = {
    x: 0,
    y: H / 2 - 20,
    h: 60,
    w: 5,
    color: "Yellow",
}
const ball = {
    x: W / 2,
    y: 10,
    raduis: 5,
    speed: 5,
    color: "white",
    dx: 8,
    dy: 8,
}
const net = {
    x: W / 2 - 1,
    y: 0,
    w: 2,
    h: 10,
    color: "white",
}
const cercle = {
    x: W / 2,
    y: H / 2,
    raduis: 20,
    color: "black",
}
const tablePadle = [];
for (let i = 0; i < 4; i++) {
    const upperY = H / 2 + goole.h - 10;
    const lowerY = H / 2 - goole.h + 10;
    tablePadle[i] = [];
    if (i == 0) {
        tablePadle[i][i] = {
            x: paddle.x,
            y: H / 2,
            color: "Red",
            h: paddle.h,
            w: paddle.w,
        }
    } else if (i == 1) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: lowerY,
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            } else {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: upperY,
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            }
        }
    } else if (i == 2) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: paddle.y,
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }

            } else if (j == 1) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: paddle.y + i * (goole.h - 10),
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            } else {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: paddle.y - i * (goole.h - 10),
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            }

        }
    } else {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: lowerY,
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            } else if (j == 1) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: upperY,
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            } else if (j == 2) {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: paddle.y + i * (goole.h - 10),
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            } else {
                tablePadle[i][j] = {
                    x: paddle.x + ((i * W) / 10),
                    y: paddle.y - i * (goole.h - 10),
                    h: paddle.h,
                    w: paddle.w,
                    color: paddle.color,
                }
            }
        }
    }

}
const gooleTable = [];
gooleTable[0] = {
    x: 0,
    y: H / 2 - 20,
    h: 60,
    w: 5,
    color: "Yellow",
}
gooleTable[1] = {
    x: W - 5,
    y: H / 2 - 20,
    h: 60,
    w: 5,
    color: "Yellow",
}

const tablePaddleComp = [];
for (let i = 0; i < 4; i++) {
    const upperY = H / 2 + goole.h - 10;
    const lowerY = H / 2 - goole.h + 10;
    tablePaddleComp[i] = [];
    if (i == 0) {
        tablePaddleComp[i][i] = {
            x: paddleComp.x,
            y: H / 2,
            color: paddleComp.color,
            h: paddleComp.h,
            w: paddleComp.w,
        }
    } else if (i == 1) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: lowerY,
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            } else {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: upperY,
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            }
        }
    } else if (i == 2) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: paddleComp.y,
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }

            } else if (j == 1) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: paddleComp.y + i * (goole.h - 10),
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            } else {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: paddleComp.y - i * (goole.h - 10),
                    h: paddle.h,
                    w: paddle.w,
                    color: paddleComp.color,
                }
            }

        }
    } else {
        for (let j = 0; j <= i; j++) {
            if (j == 0) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: lowerY,
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            } else if (j == 1) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: upperY,
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            } else if (j == 2) {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: paddleComp.y + i * (goole.h - 10),
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            } else {
                tablePaddleComp[i][j] = {
                    x: paddleComp.x - ((i * W) / 10),
                    y: paddleComp.y - i * (goole.h - 10),
                    h: paddleComp.h,
                    w: paddleComp.w,
                    color: paddleComp.color,
                }
            }
        }
    }

}
//function drawText
function drawText(x, y, color, text) {
    $.fillStyle = color;
    $.font = "'Brygada 1918', serif";
    $.fillText(text, x, y);
}
//function draw rectangle//
function drawRect(x, y, w, h, color) {
    $.fillStyle = color;
    $.fillRect(x, y, w, h);
}

function drawBall(x, y, raduis, color) {
    $.fillStyle = color;
    $.beginPath();
    $.arc(x, y, raduis, 0, Math.PI * 2, false);
    $.closePath();
    $.fill();
}
//draw net and cercle//
function drawNet() {
    for (let i = 0; i <= H; i += 15) {
        drawRect(net.x, net.y + i, net.w, net.h, net.color);
    }
}

function drawLaxes(x, y, w, h, color) {
    /*for (let i = 0, j = 0; i < (4*W )/ 10, j < (H / 2); i += W / 10, j += goole.h-10 )
    {
        
        drawRect(x+i, y+j, w, h, color);
    }
    for (let i = 0, j = H / 2; i < (4 * W) / 10, j >= 0; i += W / 10, j -= goole.h)
    {
        drawRect(x+i, j, w, h, color);
        
    }
    
    drawRect(((2 * W) / 10) + 10, y, paddle.w, h, color);
    for (let j = H / 2 - goole.h; j <= H / 2 + goole.h; j += 2*goole.h)
    {
        drawRect(((3*W)/10)+10, j, w, h, color);
    }*/
    tablePadle.forEach((col) => {
        col.forEach((element) => {
            drawRect(element.x, element.y, element.w, element.h, element.color);
        })
    })
}

function drawComp() {
    /*for (let i = 0, j = 0; i < (4*W )/ 10, j < (H / 2); i += W / 10, j += goole.h-10 )
    {
        
        drawRect(paddleComp.x-i, paddleComp.y+j, paddleComp.w, paddleComp.h, paddleComp.color);
    }
    for (let i = 0, j = H / 2; i < (4 * W) / 10, j >= 0; i += W / 10, j -= goole.h)
    {
        drawRect(paddleComp.x-i, j, paddleComp.w, paddleComp.h, paddleComp.color);
        
    }
    drawRect(((8 * W) / 10) - 15, paddleComp.y, paddleComp.w, paddleComp.h, paddleComp.color);
    for (let j = H / 2 - goole.h; j <= H / 2 + goole.h; j += 2*goole.h)
    {
        drawRect(((7*W)/10)-15, j, paddleComp.w, paddleComp.h, paddleComp.color);
    }*/
    tablePaddleComp.forEach((col) => {
        col.forEach((element) => {
            drawRect(element.x, element.y, element.w, element.h, element.color);
        })
    })
}

//collision functon//
function collision(b, p) {
    b.top = b.y - b.raduis;
    b.bottom = b.y + b.raduis;
    b.left = b.x - b.raduis;
    b.right = b.x + b.raduis;
    p.top = p.y;
    p.bottom = p.y + p.h;
    p.left = p.x;
    p.right = p.x + p.w;
    return (b.top < p.bottom && b.bottom > p.top && b.left < p.right && b.right > p.left)
}
//function rastball(){
function restball() {
    ball.x = W / 2;
    ball.y = 10;
    ball.speed = 5;
}

//function update//
function update() {
    ball.x += ball.dx;
    ball.y += ball.dy;
    let level = 0.5;
    if (ball.y + ball.raduis > H || ball.y - ball.raduis < 0) {
        ball.dy *= -1;
    }
    if (ball.x - ball.raduis < 0 || ball.x + ball.raduis > W) {
        ball.dx *= -1;
    }
    let player = (ball.x < W / 2) ? tablePadle : tablePaddleComp;
    player.forEach((col) => {
        col.forEach((element) => {
            if (collision(ball, element)) {
                console.log("5555");
                let pointCollision = ball.y - element.y - element.h / 2;
                pointCollision /= element.h / 2;
                let angle = Math.PI / 4 * (pointCollision);
                let direction = (ball.x > element.x) ? 1 : -1;
                ball.dx = direction * ball.speed * Math.cos(angle);
                ball.dy = direction * ball.speed * Math.sin(angle);
                ball.x += ball.dx;
                ball.y += ball.dy;
                ball.speed += 0.25;
            }
            gooleTable.forEach((goole) => {
                if (collision(ball, goole)) {
                    if (ball.x < W / 2) {
                        paddle.score++;
                        restball();
                    } else if (ball.x > W / 2) {
                        paddleComp.score++;
                        restball();
                    }
                }

            })

        })
    })
}

function render() {
    //drawCnvas//
    drawRect(0, 0, W, H, "green");
    //darwBall()//
    drawBall(ball.x, ball.y, ball.raduis, ball.color);
    //drawNet//
    drawNet();
    drawBall(cercle.x, cercle.y, cercle.raduis, cercle.color);
    //draw gool//
    drawRect(goole.x, goole.y, goole.w, goole.h, goole.color);
    drawRect((W - goole.w), goole.y, goole.w, goole.h, goole.color);
    drawLaxes(paddle.x, paddle.y, paddle.w, paddle.h, paddle.color);
    drawComp()
    if (paddle.score >= 4) {
        drawText(W / 10, H / 7, "RED", `3andk :${Math.floor(paddle.score/4)}`)
    }
    if (paddleComp.score >= 4) {
        drawText(W / 10, H / 7, "black", `3andk :${Math.floor(paddleComp.score/4)}`)
    }


}

function game() {
    render();
    update();
}
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {

        tablePadle.forEach((col) => {
            col.forEach((element) => {
                if (10 < tablePadle[3][3].y) {
                    element.y -= 10;
                }
            })
        })

    }
    if (e.key == "ArrowDown") {

        tablePadle.forEach((col) => {
            col.forEach((element) => {
                if (tablePadle[3][2].y < H - 40) {
                    element.y += 10;
                }
            })
        })

    }
});

setInterval(game, 1000 / 50);