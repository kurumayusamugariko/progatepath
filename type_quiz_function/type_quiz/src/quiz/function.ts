// Q1: triple という関数に引数と返り値の型を追加してエラーを解消してください
const triple = (input: number):number => {
  return input * 3;
};

// Q2: AddFunc という型を定義して、エラーを解消してください
type AddFunc = (x: number) => number;

const addOne: AddFunc = (x: number): number => x + 1;

// Q3: RepeatFunc という型を定義して、エラーを解消してください
type RepeatFunc = (text: string, times: number) => string;

const repeat: RepeatFunc = (text: string, times: number) => {
    let repeatedText = "";
    for(let i = 0; i < times; i++) {
        repeatedText += text;
    }
    return repeatedText;
};
