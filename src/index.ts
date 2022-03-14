import { CsvFileReader } from './CsvFileReader';

const matches = new CsvFileReader('db/football.csv').data;

// enum - enumeration
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}

let manUnitedWins = 0;

matches.forEach(match => {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
});

console.log(`Man United won ${manUnitedWins} games`);
