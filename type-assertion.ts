// ダウンキャスト
var obj: any = 1;
var num = <number>obj;

// アップキャスト
var str = "string";
num = <any>str;

// Neither type 'string' nor type 'number' is assignable to the other.
//var illegal: number = <number>"string";
var illegal: number = <number><any>"string";


class Base {
    str: string;
}
class InheritA extends Base {
    num: number;
}
class InheritB extends Base {
    bool: boolean;
}

// とりあえず型は親クラスとして…
var base: Base;
// 中身が何か調べてから安全にダウンキャストする
if (base instanceof InheritA) {
    var a = <InheritA>base;
    a.num;
} else if (base instanceof InheritB) {
    var b = <InheritB>base;
    b.bool;
}


// こういう、型定義があるとする。実装はJavaScriptが与える。
declare class Base2 {
    str: string;
}

var base2 = new Base2();
// 本当は、Baseクラスがnumプロパティも持ってるんだけど…
// 型定義が不足しているなら、anyで誤魔化せばいいじゃない！！
// キレイごとだけじゃ世の中生きていけないんじゃよ…
var num: number = (<any>base2).num;