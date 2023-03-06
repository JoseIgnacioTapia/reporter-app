import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analiyzer: Analyzer, public outputTarget: OutputTarget) {}
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
