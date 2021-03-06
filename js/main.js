require([
    './modules/renderer',
    './modules/bunnie',
    './modules/simpleText'
], function (Renderer, Bunnie, SimpleText) {
    var canvas = document.getElementById('myCanvas');
    var image = document.createElement('img');
    var renderer = new Renderer(canvas);

    var bunniesNumber = 100;

    var simpleTitle = new SimpleText(100, 100, "Hello VinnytsiaJS!");

    for (var i = 0; i < bunniesNumber; i++) {
        renderer.addElement(generateRandomBunnie(image));
    }

    renderer.addElement(simpleTitle);

    image.onload = function () {
        renderer.startAnimationLoop();
        setTimeout(function () {
            renderer.stopAnimationLoop();
        }, 15000);
    };
    image.src = 'img/bunny.png';

    function generateRandomBunnie (image) {
        var x = ~~(Math.random() * 640),
            y = ~~(Math.random() * 480);

        return new Bunnie(x, y, image);
    }
});