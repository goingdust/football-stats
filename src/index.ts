import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const matches = new MatchReader('db/football.csv').data;

let manUnitedWins = 0;

matches.forEach(match => {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
});

console.log(`Man United won ${manUnitedWins} games`);
