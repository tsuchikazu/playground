function hello(word) {
    return "Hello, " + word;
}
hello("TypeScript");
// 戻り値の型を省略すると型推論される
function bye(word) {
    return "Bye, " + word;
}
bye("TypeScript");
// ? をつけると、引数を省略可能
function hey(word) {
    return "Hey, " + (word || "TypeScript");
}
hey();
console.log(hey());
// デフォルト値を指定することもできる( ? をつけるのと同じような感じ
function ahoy(word) {
    if (word === void 0) { word = "TypeScript"; }
    return "Ahoy! " + word;
}
ahoy();
// 可変長引数もあるよ
function hello2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return "Hello, " + args.join(" & ");
}
console.log(hello2("TS", "JS"));
// オプショナルな引数の後に省略不可な引数が指定できない
function funcA(arg1, arg2) {
    return "Hello, " + arg1 + arg2;
}
//# sourceMappingURL=function.js.map