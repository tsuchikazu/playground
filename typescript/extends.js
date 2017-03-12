var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base() {
    }
    Base.prototype.greeting = function (name) {
        return "Hi!" + name;
    };
    return Base;
})();
var Inherit = (function (_super) {
    __extends(Inherit, _super);
    function Inherit() {
        _super.apply(this, arguments);
    }
    Inherit.prototype.greeting = function (name) {
        return _super.prototype.greeting.call(this, name) + ". How are You?";
    };
    return Inherit;
})(Base);
var obj = new Inherit();
console.log(obj.greeting("TypeScript"));
//# sourceMappingURL=extends.js.map