import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const matchReader = new MatchReader('db/football.csv');
matchReader.read();

let manUnitedWins = 0;

matchReader.data.forEach(match => {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
});

console.log(`Man United won ${manUnitedWins} games`);
