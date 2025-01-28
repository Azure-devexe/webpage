document.getElementById('enter').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';

    const music = document.getElementById('music');
    music.play();
});

const content = document.querySelector('.content');

content.addEventListener('mousemove', function (e) {
    const { offsetWidth: Width, offsetHeight: Height } = content;
    const Rect = content.getBoundingClientRect();
    const CenterX = Rect.left + Width / 2;
    const CenterY = Rect.top + Height / 2;
    const MouseX = e.clientX;
    const MouseY = e.clientY;
    const XDistance = (MouseX - CenterX) / (Width / 2);
    const YDistance = (MouseY - CenterY) / (Height / 2);
    const Tilt = 10;
    const TiltX = YDistance * Tilt;
    const TiltY = -XDistance * Tilt;

    content.style.transform = `rotateX(${TiltX}deg) rotateY(${TiltY}deg)`;
});

content.addEventListener('mouseleave', function () {
    content.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

let CursorX = window.innerWidth / 2

document.addEventListener('mousemove', function (e) {
    CursorX = e.clientX;
});

setInterval(CreateSnowflake, 40);

function CreateSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const StartX = Math.random() * (window.innerWidth + 400) - 300;
    snowflake.style.left = `${StartX}px`;
    snowflake.style.top = `-10px`;

    document.body.appendChild(snowflake);

    const DriftDistance = (CursorX - StartX) / 10;

    snowflake.animate(
        [
            { transform: `translateX(0px) translateY(0px)`, opacity: 1 },
            { transform: `translateX(${DriftDistance}px) translateY(100vh)`, opacity: 0.5 }
        ],
        {
            duration: 3000,
            easing: 'linear',
            iterations: 1,
            fill: 'forwards'
        }
    );

    setTimeout(() => snowflake.remove(), 3000);
}