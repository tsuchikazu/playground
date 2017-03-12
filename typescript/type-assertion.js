var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// ダウンキャスト
var obj = 1;
var num = obj;
// アップキャスト
var str = "string";
num = str;
// Neither type 'string' nor type 'number' is assignable to the other.
//var illegal: number = <number>"string";
var illegal = "string";
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
var InheritB = (function (_super) {
    __extends(InheritB, _super);
    function InheritB() {
        _super.apply(this, arguments);
    }
    return InheritB;
})(Base);
// とりあえず型は親クラスとして…
var base;
// 中身が何か調べてから安全にダウンキャストする
if (base instanceof InheritA) {
    var a = base;
    a.num;
}
else if (base instanceof InheritB) {
    var b = base;
    b.bool;
}
var base2 = new Base2();
// 本当は、Baseクラスがnumプロパティも持ってるんだけど…
// 型定義が不足しているなら、anyで誤魔化せばいいじゃない！！
// キレイごとだけじゃ世の中生きていけないんじゃよ…
var num = base2.num;
//# sourceMappingURL=type-assertion.js.map