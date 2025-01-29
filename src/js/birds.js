export const callBirds = function () {
    VANTA.BIRDS({
        el: "#home-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0,
        color1: 0xb59d7c,
        color2: 0xffffff,
        colorMode: "lerpGradient",
        birdSize: 0.35,
        quantity: 4.2,
    });
}