define(function (require) {
    var CanvasElement = require('./canvasElement');

    function Bunnie (x, y, image) {
        CanvasElement.call(this, x, y);

        this.angle = 0;
        this.deltaAngle = 0.1;
        this.twoPi = 6.28;

        this.image = image;
    }

    Bunnie.prototype.update = function () {
        this.angle = (this.angle + this.deltaAngle) % this.twoPi;
        this.x++;
    };

    Bunnie.prototype.render = function (context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, 0, 0);
        context.restore();

        // context.translate(this.x, this.y);
        // context.rotate(this.angle);
        // context.drawImage(this.image, 0, 0);
        // context.rotate(-this.angle);
        // context.translate(-this.x, -this.y);
    };

    return Bunnie;
});