// Q1: 配列 array と値 value を受け取り、配列の中に value が含まれるか判定して boolean を返す、 includes という関数の型を定義してください
// このとき、配列の要素の型は value の型と同じであり、任意の型が利用できることを型で表現してください

// 以下を変更する
const includes = <T>(array:Array<T>, value:T):boolean => {
  // 変更箇所はこの上の行まで
  for (const v of array) {
    if (v === value) {
      return true;
    }
  }
  return false;
};

const includesOk1 = includes<number>([1, 2, 3], 4);
const includesOk2: boolean = includes<string>(["a", "b"], "c");
// @ts-expect-error "message" doesn't match with the type of array (Array<number>).
const includesTypeError1: boolean = includes<string>([1, 2, 3], "message");

// Q2: プロパティとして 1 つの値をもつ Box クラスの定義を書いてください
// Box クラスにはプロパティの値を取得する get メソッドと プロパティの値を設定する set メソッドがあります
// constructor で受け取る item に任意の型のデータが入れられるようにしてください
// 以下を変更する
class Box<T> {
  private item: T;

  constructor(input: T) {
    this.item = input;
  }

  get(): T {
    return this.item;
  }

  set(input:T): void {
    this.item = input;
  }
}
// 変更箇所はこの上の行まで
const stringBox = new Box<string>("hello");
stringBox.get();
stringBox.set("world");

const numberBox = new Box<number>(100);
numberBox.get();
numberBox.set(200);
// @ts-expect-error Property 'toLowerCase' does not exist on type 'number'.
numberBox.get().toLowerCase();
// @ts-expect-error Argument of type 'string' is not assignable to parameter of type 'number'.
numberBox.set("string");
