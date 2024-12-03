import results from "./results.js";

const filteredResults = [];
for (let i = 0; i < results.length; i++) {
  const result = results[i];
  if (result.grade === 2) {
    filteredResults.push(result);
  }
}

const pointslist = [];
for (let secondGrade of filteredResults) {
  const points = Object.values(secondGrade.points);

  let total = 0;
  for (let i = 0; i < points.length; i++) {
    total += points[i];
  }
  pointslist.push(total);
}

const resultsWithTotal = [];
for (let i = 0; i < filteredResults.length; i++) {
  const results = filteredResults[i];
  resultsWithTotal.push({...results, total: pointslist[i]});
}

let totalsort = resultsWithTotal.sort(function (a, b) {
  return a.total > b.total ? -1 : 1;
});

const top3 = totalsort.slice(0, 3);
//console.log(top3);

let total = 0;
for (let p of pointslist) {
  total += p;
}
const average = Math.ceil(total / pointslist.length);

console.log("# Top 3 of total points");
for (let i = 0; i < top3.length; i++) {
  console.log(
    i + 1 + " | " + top3[i].grade + " | " + top3[i].name + " | " + top3[i].total
  );
}
console.log("average: " + average);
