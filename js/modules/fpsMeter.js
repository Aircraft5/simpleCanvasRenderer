define(function (require) {
    function FpsMeter () {
        this.previousTime = 0;
        this.currentTime = 0;
        this.measuredValue = 0;
    }

    FpsMeter.prototype.measure = function () {
        if (this.previousTime) {
            this.currentTime = window.performance.now();

            this.measuredValue = ~~(1000 / (this.currentTime - this.previousTime));
            console.warn(this.measuredValue);

            this.previousTime = this.currentTime;
        } else {
            console.warn('initial frame');
            this.previousTime = window.performance.now();
        }
    };

    FpsMeter.prototype.reset = function () {
        this.previousTime = 0;
        this.currentTime = 0;
        this.measuredValue = 0;
    };

    return FpsMeter;
});