import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('db/football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');

summary.buildAndPrintReport(matchReader.matches);
