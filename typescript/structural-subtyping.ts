// duck typing

class Foo {
    str = "strin";
    num = 1;
}
// 構造が一緒なら、型が同じ
var obj: Foo = {
    str: "strin",
    num: 1
}



interface Point {
    x: number;
    y: number;
    color?: string; // 無くてもいい
}
// Point の実装を強制する！！！
class PointImpl1 implements Point {
    constructor(public x: number, public y: number) {
    }
}
// Point の実装が強制されないけど互換性はある！
class PointImpl2 {
    y = 1;
    color = "red";
    constructor(public x: number, public z: string) {
    }
}

// 引数に Point をとる
function printPoint(p: Point): string {
    var message = "x=" + p.x + ", y=" + p.y;
    if (p.color) {
        message = p.color + "(" + message + ")";
    }
    return message;
}

// 次のすべては正しいコードとなります
console.log(printPoint(new PointImpl1(1, 2)));
console.log(printPoint(new PointImpl2(3, "4")));
console.log(printPoint({
    x: 5,
    y: 6,
    z: 7  // 要素が多すぎる分には問題ない
}));


