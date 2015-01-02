var Almpl = (function () {
    function Almpl() {
    }
    // method
    Almpl.prototype.hello = function (word) {
        return "Hello, " + word;
    };
    return Almpl;
})();
var objA = new Almpl();
console.log(objA.hello);
var objB = {
    str: "string",
    num: 1
};
// interfaceはクラスすら拡張する！(実装はなかったことになる
var FooClass = (function () {
    function FooClass(num) {
        this.num = num;
    }
    return FooClass;
})();
var objC = {
    num: 42,
    str: "string"
};
//# sourceMappingURL=interface.js.map