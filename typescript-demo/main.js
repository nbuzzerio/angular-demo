var message;
message = 'abcdefg';
//Type Assertions
var assertion1 = message.endsWith('g');
var assertion2 = message.endsWith('g');
var drawShape = function (Coordinates) {
    //...
};
drawShape({
    x: 1,
    y: 2,
    z: 3
});
//Classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
