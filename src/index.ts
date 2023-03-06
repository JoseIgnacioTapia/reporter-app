import { MatchReader } from './MatchReader';
import { MatchResult } from './Matchresults';
import { CsvFileReader } from './CsvFileReader';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'Data Reader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
