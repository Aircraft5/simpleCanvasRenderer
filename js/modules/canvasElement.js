define(function (require) {

    function CanvasElement (x, y) {
        this.id = 0;

        this.x = x;
        this.y = y;
    }

    CanvasElement.prototype.update = function () {};

    CanvasElement.prototype.render = function (context) {};

    return CanvasElement;
});