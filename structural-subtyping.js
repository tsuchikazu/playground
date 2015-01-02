// duck typing
var Foo = (function () {
    function Foo() {
        this.str = "strin";
        this.num = 1;
    }
    return Foo;
})();
// 構造が一緒なら、型が同じ
var obj = {
    str: "strin",
    num: 1
};
// Point の実装を強制する！！！
var PointImpl1 = (function () {
    function PointImpl1(x, y) {
        this.x = x;
        this.y = y;
    }
    return PointImpl1;
})();
// Point の実装が強制されないけど互換性はある！
var PointImpl2 = (function () {
    function PointImpl2(x, z) {
        this.x = x;
        this.z = z;
        this.y = 1;
        this.color = "red";
    }
    return PointImpl2;
})();
// 引数に Point をとる
function printPoint(p) {
    var message = "x=" + p.x + ", y=" + p.y;
    if (p.color) {
        message = p.color + "(" + message + ")";
    }
    return message;
}
// 次のすべては正しいコードとなります
console.log(printPoint(new PointImpl1(1, 2)));
console.log(printPoint(new PointImpl2(3, "4")));
console.log(printPoint({
    x: 5,
    y: 6,
    z: 7 // 要素が多すぎる分には問題ない
}));
//# sourceMappingURL=structural-subtyping.js.map