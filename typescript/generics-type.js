var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var strArray = ["a", "b", "c"];
var numArray = [1, 2, 3];
strArray.forEach(function (v) { return v.charAt(0); });
numArray.forEach(function (v) { return v.toFixed(2); });
strArray.forEach(function (v) { return v.charAt(0); });
// クラスとジェネリクス
var SampleA = (function () {
    function SampleA(data) {
        this.data = data;
    }
    return SampleA;
})();
var objA = new SampleA("str");
// <string> を省略しても引数から推論可能
var objA2 = new SampleA("str");
// 使い方
var objB = { data: 1 };
// オブジェクト型リテラル各種
var obj;
// 関数型
var func;
// 使い方
func = function (array) { return array[0]; };
func([1, 2, 3]);
// コンストラクタ型
var ctor;
// 使い方
ctor = SampleA;
new ctor("str");
var Base = (function () {
    function Base() {
    }
    return Base;
})();
var InheritA = (function (_super) {
    __extends(InheritA, _super);
    function InheritA() {
        _super.apply(this, arguments);
    }
    return InheritA;
})(Base);
// これはOK
var sampleA;
// これはダメ RegExpはBaseを継承していない
// error TS2344: Type 'RegExp' does not satisfy the constraint 'Base'.
// Property 'str' is missing in type 'RegExp'.
//var sampleB: Sample<RegExp>;
// これはOK 指定したオブジェクト型リテラルはBaseクラスの要件を満たす
var sampleC;
//# sourceMappingURL=generics-type.js.map