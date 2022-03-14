import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('db/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
