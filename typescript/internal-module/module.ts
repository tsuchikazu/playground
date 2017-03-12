module a {
    // exportをつけると外側から参照できる
    export class Sample {
        hello(word = "TypeScript") {
            return "Hello, " + word;
        }
    }

    export var obj = new Sample();
}

module a {
    export function bye(word= "Javascript") {
        return "Bye, " + word;
    }

    // 定義を分けると同名Moduleもダメ Cannot find name 'Sample'
    //var tmp = new Sample();
}

module b {
    export module c {
        export function hello() {
            return a.obj.hello();
        }
    }
}

module d.e {
    export function hello() {
        return a.obj.hello();
    }
}

console.log(b.c.hello());
console.log(d.e.hello());
console.log(new a.Sample().hello());

module f {
    var objA  = new a.Sample();

    // module名指定がめんどくさい場合は、importする
    import Sample = a.Sample;
    var objB = new Sample();

    // 他の名前でimportしても良し
    import Test = a.Sample;
    var objC = new Test();

    // 別名でも互換性が失われるわけではない
    objA = new Test();
}