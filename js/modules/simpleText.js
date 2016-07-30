define(function (require) {
    var CanvasElement = require('./canvasElement');

    function SimpleText (x, y, text) {
        CanvasElement.call(this, x, y);

        this.angle = 0;
        this.deltaAngle = 0.1;
        this.twoPi = 6.28;

        this.text = text;

        this.redChannel = 0;
        this.greenChannel = 0;
        this.blueChannel = 0;
    }

    SimpleText.prototype.update = function () {
        this.redChannel = this.redChannel < 16 ? 16 : (this.redChannel + 1) % 256;
        this.greenChannel = this.greenChannel < 16 ? 16 : (this.greenChannel + 2) % 256;
        this.blueChannel = this.blueChannel < 16 ? 16 : (this.blueChannel + 3) % 256;
    };

    SimpleText.prototype.render = function (context) {
        context.font = "48px serif";
        context.fillStyle = '#' +
            this.redChannel.toString(16) +
            this.greenChannel.toString(16) +
            this.blueChannel.toString(16);
        context.fillText(this.text, this.x, this.y);
    };

    return SimpleText;
});