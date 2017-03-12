var objA = {
    x: 1,
    y: 2
};

//型を作成
var objB: {
    x: number;
    y: number;
};

// おんなじ！
objA = objB;
objB = objA;

// 型を書くところに、型をかける
function move(value: {x:number; y:number;},
              delta: {dx?: number; dy?:number;}
): {x: number; y:number} {
    if (delta.dx) {
        value.x += delta.dx;
    }
    if (delta.dy) {
        value.y += delta.dy;

    }
    return value
}

var result = move({x:1,y:2}, {dx:-2});
console.log(result)




// プロパティシグニチャ
var propertySignature: {
    property: string;
};
propertySignature = {
    property: "Hi!"
};



// コールシグニチャ
var callSignature:{
    (word:string): string;
};
callSignature = word => "hello, " + word;
callSignature = (word: string) => {
    return "hello, " + word;
};
console.log(callSignature("world"));


// コンストラクトシグニチャ
var clazz: {
    new (): any;
};
class Sample {
}
clazz = Sample;
var obj = new clazz();

function Hello() {
}
//new Hello();


// インデックスシグニチャ
var indexA: {
    [index: number]: string;
};
var indexB: {
    [index: string]: string;
};
var s1 = indexA[1];
// エラーになる Index signature of object type implicitly has an 'any' type.
//var s2 = indexA["test"]

var s3 = indexB[1]; // インデックスの型指定がstringの場合、numberでもOK
var s4 = indexB["test"];

indexA = {
    0: "str",
    // なぞ！！！
    // インデックスの型が number の場合、数値以外のプロパティがインデックスシグニチャで
    // 取れる値に反していてもよい
    num: 1
}
indexB = {
    0: "str",
    str: "str"
    // なぞ！！！
    // インデックスの型が string の場合、すべてのプロパティの型がインデックスシグニチャに
    // 反しないようにしなければならない
    // num: 1
}

// 文字列リテラルによるアクセスも許可している
var indexObj = {
    str: "string",
    num: 1
};

// 文字列リテラルによるアクセスだと普通に . アクセス同様に型情報が得られる
var str: string = indexObj["str"];
var num: number = indexObj["num"];
// ちなみに、存在しない要素にアクセスすると any になる
// --noImplicitAny を使うと暗黙的anyとしてちゃんと怒られる 萌え
// error TS7017: Index signature of object type implicitly has an 'any' type.
//var any = indexObj["notExists"];

// 即値じゃないとダメ！コンパイラが処理できないのです
var propertyName = "str";
// error TS7017: Index signature of object type implicitly has an 'any' type.
//var str2 = indexObj[propertyName];




/*
 メソッドシグニチャ
 */
var methodSignature: {
    hello(word: string): string;
};

methodSignature = {
    hello(word: string) {
        return "Hello, " + word;
    }
};
methodSignature = {
    hello: (word:string) => "Hello," + word
};
methodSignature = {
    hello: function(word:string) {
        return "Hello, " + word;
    }
}