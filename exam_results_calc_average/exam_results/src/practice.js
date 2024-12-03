import allResults from "./results.js";

console.log("total count", allResults.length);

const filterByGrade = (results, grade) => {
	const filteredResults = [];
	for (let i = 0; i < results.length; i++){
		const result = results[i];
		if(result.grade === grade) {
			filteredResults.push(result);
		}
	}
	return filteredResults;
}

console.log("grade2", filterByGrade(allResults,2));

const sum = (numbers) => {
	let result = 0;
	for (let i = 0; i < numbers.length; i++){
		result += numbers[i];
	}
	return result;
};

const average = (numbers) => sum(numbers) / numbers.length;

function averageOf(results, grade, subject){
	const points = [];
	const filteredResults = filterByGrade(results, grade);
	for (let i = 0; i < filteredResults.length; i++) {
		const filteredResult = filteredResults[i];
		points.push(filteredResult.points[subject])
	}
	return average(points);
}
console.log(
	"average of grade2 and Japanese",
	averageOf(allResults, 2, "Japanese")
)