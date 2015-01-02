interface A {
    // property
    str: string;

    // method
    hello(word: string): string;
}

class Almpl implements A {
    // property
    str: string;

    // method
    hello(word: string): string  {
        return "Hello, " + word;
    }
}
var objA = new Almpl();
console.log(objA.hello);

interface B1 {
    str:string;
}
interface B2 extends B1 {
    num: number;
}
var objB: B2 = {
    str: "string",
    num: 1
}

// interfaceはクラスすら拡張する！(実装はなかったことになる
class FooClass {
    constructor(public num: number) {
    }
}
interface C extends FooClass {
    str: string;
}
var objC: C = {
    num: 42,
    str: "string"
};