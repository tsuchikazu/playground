var Base = (function () {
    // コンストラクタ
    function Base(boolA, boolB, boolC, boolD) {
        this.boolB = boolB;
        this.boolC = boolC;
        this.boolD = boolD;
    }
    // メソッド
    Base.prototype.hello = function (word) {
        return "Hello, " + word;
    };
    Object.defineProperty(Base.prototype, "dateA", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    return Base;
})();
var obj = new Base(true, false, true, false);
obj.numA;
obj.strA;
obj.numB;
// obj.numC; // private
//obj.numD; //protected
obj.boolB;
//obj.boolC; // private
//obj.boolD; // protected
obj.hello("TypeScript");
obj.dateA = new Date();
obj.dateA;
//# sourceMappingURL=class.js.map