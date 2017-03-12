var a;
(function (a) {
    // exportをつけると外側から参照できる
    var Sample = (function () {
        function Sample() {
        }
        Sample.prototype.hello = function (word) {
            if (word === void 0) { word = "TypeScript"; }
            return "Hello, " + word;
        };
        return Sample;
    })();
    a.Sample = Sample;
    a.obj = new Sample();
})(a || (a = {}));
var a;
(function (a) {
    function bye(word) {
        if (word === void 0) { word = "Javascript"; }
        return "Bye, " + word;
    }
    a.bye = bye;
})(a || (a = {}));
var b;
(function (b) {
    var c;
    (function (c) {
        function hello() {
            return a.obj.hello();
        }
        c.hello = hello;
    })(c = b.c || (b.c = {}));
})(b || (b = {}));
var d;
(function (d) {
    var e;
    (function (e) {
        function hello() {
            return a.obj.hello();
        }
        e.hello = hello;
    })(e = d.e || (d.e = {}));
})(d || (d = {}));
console.log(b.c.hello());
console.log(d.e.hello());
console.log(new a.Sample().hello());
var f;
(function (f) {
    var objA = new a.Sample();
    // module名指定がめんどくさい場合は、importする
    var Sample = a.Sample;
    var objB = new Sample();
    // 他の名前でimportしても良し
    var Test = a.Sample;
    var objC = new Test();
    // 別名でも互換性が失われるわけではない
    objA = new Test();
})(f || (f = {}));
//# sourceMappingURL=module.js.map