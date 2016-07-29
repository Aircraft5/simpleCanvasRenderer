define(function (require) {
    var CanvasElement = require('./canvasElement');

    function SimpleTitle (x, y) {
        CanvasElement.call(this, x, y);

        this.angle = 0;
        this.deltaAngle = 0.1;
        this.twoPi = 6.28;

        this.text = "Simple title";
    }

    SimpleTitle.prototype.update = function () {};

    SimpleTitle.prototype.render = function (context) {
        context.font = "48px serif";
        context.fillText(this.text, this.x, this.y);
    };

    return SimpleTitle;
});