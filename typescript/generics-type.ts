var strArray: Array<string> = ["a", "b", "c"];
var numArray: Array<number> = [1,2,3];

strArray.forEach(v => v.charAt(0));
numArray.forEach(v => v.toFixed(2));

strArray.forEach((v: string) => v.charAt(0));


// クラスとジェネリクス
class SampleA<T> {
    constructor(public data: T) {
    }
}

var objA = new SampleA<string>("str");
// <string> を省略しても引数から推論可能
var objA2 = new SampleA("str");


// インタフェースとジェネリクス
interface SampleB<T> {
    data: T;
}
// 使い方
var objB: SampleB<number> = { data: 1 };


// オブジェクト型リテラル各種
var obj: {
    new <T>(value: T): any;
    <T>(value: T): any;
    methodA<T>(value: T): any;
    // 型パラメータは複数あってもよい
    methodB<T, U>(value: T): U;
};

// 関数型
var func: <T>(array: T[]) => T;
// 使い方
func = <T>(array: T[]) => array[0];
func<number>([1, 2, 3]);

// コンストラクタ型
var ctor: new <T>(value: T) => any;
// 使い方
ctor = SampleA;
new ctor<string>("str");




class Base {
    str: string;
}
class InheritA extends Base {
    num: number;
}

interface Sample<T extends Base> {
    method(): T;
}

// これはOK
var sampleA: Sample<InheritA>;

// これはダメ RegExpはBaseを継承していない
// error TS2344: Type 'RegExp' does not satisfy the constraint 'Base'.
// Property 'str' is missing in type 'RegExp'.
//var sampleB: Sample<RegExp>;

// これはOK 指定したオブジェクト型リテラルはBaseクラスの要件を満たす
var sampleC: Sample<{ str: string; }>;