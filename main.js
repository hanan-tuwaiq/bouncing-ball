let canvas = document.querySelector('#game');
let context = canvas.getContext('2d');

let circle = {
    x: 100,
    y: 100,
    size: 40,
    dx: 5,
    dy: 7
}
let hsl = 1;
function drawCircle() {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    context.fillStyle = 'hsl('+ hsl +',100%,50%)';
    context.fill();
    hsl++;
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.fillRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'rgba(0,0,0,0.1)';
    context.fill();
  
    circle.x += circle.dx;
    circle.y += circle.dy;
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
        circle.dx *=-1
    }
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
        circle.dy *=-1
    }
    drawCircle()
    requestAnimationFrame(update)
}
update()  