class Base {
    // インスタンス変数
    numA: number;
    strA: string;
    public numB: number;
    private numC: number;
    // TypeScript 1.3.0から protected 利用可
    protected numD: number;

    // クラス変数
    static numA: number;
    public static numB: number;
    private static numC: number;
    protected static numD: number;

    // コンストラクタ
    constructor(boolA: boolean,
                public boolB: boolean,
                private boolC: boolean,
                protected boolD: boolean) {

    }

    // メソッド
    hello(word: string): string {
        return "Hello, " + word;
    }

    // get, setアクセサ
    // コンパイル時に --target e5 以上が必要
    _date: Date;
    get dateA(): Date {
        return this._date;
    }
    set dateA(value: Date) {
        this._date = value;
    }
}

var obj = new Base(true, false, true, false)
obj.numA;
obj.strA;
obj.numB;
// obj.numC; // private
//obj.numD; //protected
obj.boolB;
//obj.boolC; // private
//obj.boolD; // protected

obj.hello("TypeScript");
obj.dateA = new Date();
obj.dateA;
