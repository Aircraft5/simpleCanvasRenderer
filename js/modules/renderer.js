define(function (require) {

    function Renderer (canvas) {
        this.stopFlag = false;
        this.indexPointer = 0;
        this.drawingElements = [];
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    Renderer.prototype.startAnimationLoop = function () {
        var animationLoopFunction = (function () {
            console.timeEnd('Measure');

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (!this.stopFlag) {
                console.time('Measure');
                window.requestAnimationFrame(animationLoopFunction);
            }

            //drawing elements
            for (this.indexPointer = 0; this.indexPointer < this.drawingElements.length; this.indexPointer++) {
                this.drawingElements[this.indexPointer].update();
                this.drawingElements[this.indexPointer].render(this.context);
            }

        }).bind(this);

        console.time('Measure');
        animationLoopFunction();
    };

    Renderer.prototype.stopAnimationLoop = function () {
        this.stopFlag = true;
    };

    Renderer.prototype.addElement = function (element) {
        this.drawingElements.push(element);

        element.id = this.drawingElements.length - 1;
    };

    Renderer.prototype.removeElement = function (element) {
        this.drawingElements.splice(element.id, 1);
    };

    return Renderer;
});