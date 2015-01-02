function hello(word: string): string {
    return "Hello, " + word;
}
hello("TypeScript");

// 戻り値の型を省略すると型推論される
function bye(word: string) {
    return "Bye, " + word;
}
bye("TypeScript");

// ? をつけると、引数を省略可能
function hey(word?: string) {
    return "Hey, " + (word || "TypeScript");
}
hey();
console.log(hey());

// デフォルト値を指定することもできる( ? をつけるのと同じような感じ
function ahoy(word = "TypeScript") {
    return "Ahoy! " + word;
}
ahoy();

// 可変長引数もあるよ
function hello2(...args: string[]) {
    return "Hello, " + args.join(" & ");
}
console.log(hello2("TS", "JS"));


// オプショナルな引数の後に省略不可な引数が指定できない
function funcA(arg1?: string, arg2?: string) {
    return "Hello, " + arg1 + arg2;
}
