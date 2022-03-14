"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('db/football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Arsenal');
summary.buildAndPrintReport(matchReader.matches);
