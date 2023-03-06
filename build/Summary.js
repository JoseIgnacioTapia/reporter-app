"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analiyzer, outputTarget) {
        this.analiyzer = analiyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analiyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport());
