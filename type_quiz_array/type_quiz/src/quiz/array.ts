// Q1: number が入る配列, Array1 を定義してください
type Array1 = Array<number>;

const array1_1: Array1 = [1];
const array1_2: Array1 = [1, 2, 3, 4, 5];
// @ts-expect-error string is not allowed for the `Array1`.
const array1_3: Array1 = ["string", "is", "not", "allowed"];

// Q2: number か string が入る配列、Array2 を定義してください
type Array2 = Array< number| string >;

const array2_1: Array2 = [1, "string", 2, "is", 3, "allowed"];
// @ts-expect-error boolean is not allowed for the `Array2`.
const array2_2: Array2 = [true, false, true, false];

// Q3: number と string の 2 要素だけが入るタプル、Tuple1 を定義してください
type Tuple1 = [number, string];

const tuple1_1: Tuple1 = [1, "string is here"];
// @ts-expect-error too many elements.
const tuple1_2: Tuple1 = [1, "this is bad", 3, 4, 5];
// @ts-expect-error types are not matched.
const tuple1_3: Tuple1 = ["string", 1];
