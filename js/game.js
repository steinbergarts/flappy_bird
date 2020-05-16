
// Звертаємося до елементів з ХТМЛ
var canvas = document.getElementById("canvas");
var contex = canvas.getContext("2d");

//Додаємо картинки
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

//Вказуємо шлях до картинок
bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeDown.src = "img/pipeDown.png";

//Перемінна яка створює просторі між поверх нижньої труби
var gap = 90;

//Дія при натисканні на кнопку
document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 20;
}

//Створення блоків
var pipe = [];
pipe[0] = {
    x : canvas.width,
    y : 0
}

//Позиція пташки
var xPos = 10
var yPos = 150
var grav = 1

// Функція для малювання тла. (1.змінна, 2.координата х, 3.координата y, 4.ширина, 5.висота)
function draw(){
    contex.drawImage(bg, 0, 0);

    for(var i = 0; i < pipe.length; i++){
        
    }
    contex.drawImage(pipeUp, 100, 0);
    contex.drawImage(pipeDown, 100, 0 + pipeUp.height + gap)

    contex.drawImage(fg, 0, canvas.height - fg.height)

    contex.drawImage(bird, xPos, yPos)

    yPos += grav // - додає постійо один до y осі пташки
    requestAnimationFrame(draw);
    
}

// Починаємо функцію Draw як тільки завантажиться вказаний елемент
pipeDown.onload = draw;