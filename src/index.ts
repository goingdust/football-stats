import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('db/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Arsenal'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
