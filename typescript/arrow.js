// これは同じ
var funcA = function () { return true; };
var funcB = function () {
    return true;
};
var funcC = function (b) {
    return b;
};
// NOTE ここのcallbackの型注釈の意味は別の章で解説！
// 引数を1つ取って返り値無し の関数を表します。
function asyncModoki(callback) {
    callback("TypeScript");
}
// 旧来の書き方
asyncModoki(function (value) {
    console.log("Hello, " + value);
});
// アロー関数式だと楽やで
asyncModoki(function (value) {
    console.log("Hello, " + value);
});
var helloFunc = function (word) {
    if (word === void 0) { word = "TypeScript"; }
    return "Hello, " + word;
};
var helloFunc2 = function (word) {
    if (word === void 0) { word = "TypeScript"; }
    return "Hello, " + word;
};
console.log(helloFunc());
console.log(helloFunc2());
// classのarrow
"user strict";
var Sample = (function () {
    function Sample() {
    }
    Sample.prototype.test = function () {
        var _this = this;
        console.log(typeof this);
        var funcA = function () {
            console.log(typeof _this);
        };
        var funcB = function () {
            console.log("undefinedじゃないけどSampleのインスタンスじゃない");
            console.log(this);
        };
        funcA();
        funcB();
    };
    return Sample;
})();
new Sample().test();
//# sourceMappingURL=arrow.js.map