// これは同じ
var funcA = () => true;
var funcB = function() {
    return true;
}
var funcC = (b:string) => {
    return b;
}

// NOTE ここのcallbackの型注釈の意味は別の章で解説！
// 引数を1つ取って返り値無し の関数を表します。
function asyncModoki(callback: (value: string) => void) {
    callback("TypeScript");
}
// 旧来の書き方
asyncModoki(function(value: string) {
    console.log("Hello, " + value);
});
// アロー関数式だと楽やで
asyncModoki(value => {
    console.log("Hello, " + value)
});

var helloFunc = (word = "TypeScript") => {
    return "Hello, " + word;
}
var helloFunc2 = (word = "TypeScript") => "Hello, " + word;
console.log(helloFunc());
console.log(helloFunc2());

// classのarrow
"user strict";
class Sample {
    test(): void {
        console.log(typeof this);

        var funcA = () => {
            console.log(typeof this);
        }
        var funcB = function() {
            console.log("undefinedじゃないけどSampleのインスタンスじゃない")
            console.log(this);
        }

        funcA();
        funcB();
    }
}
new Sample().test();