// Q1: Product という型を定義して、エラーを解消してください

// ここに型を定義する
type Product = {
	name: string;
	price: number;
};
// ここのエラーを解消する
const a: Product = {
  name: "note book",
  price: 100,
};

// Q2: User の型定義を修正して、エラーを解消してください
type User = {
  username: string;
  email?: string;
};

const b: User = {
  username: "taro",
  email: "taro@example.com",
};

// ここのエラーを解消する
const c: User = {
  username: "jiro",
};

// Q3: Book の型定義を変更して、title の変更ができないようにしてください
type Book = {
  readonly title: string;
  author: string;
};

const d: Book = {
  title: "programming",
  author: "ninjawanko",
};

// `d.title = "typescript basic"` がエラーになるようにする
// @ts-expect-error Cannot assign to 'title' because it is a read-only property.
d.title = "typescript basic";
