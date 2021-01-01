import { Logger } from "../src/Logger";
import { LogAnalyzer } from "../src/LogAnalyzer";

class FakeLogger extends Logger {
  lastError = ''

  constructor() {
    super()
  }

  logError(message) {
    this.lastError = message
  }
}


describe('LogAnalyzerTests', function () {
  it('Analyze_TooShortFileName_CallLogger', function () {
    // 1. manual mock
    // const fakeLogger = new FakeLogger();

    // 2. dynamic mock
    const fakeLogger = new Logger();
    fakeLogger.logError = jest.fn();

    const analyzer = new LogAnalyzer(fakeLogger);
    analyzer.analyze('a.txt')

    expect(fakeLogger.logError).toBeCalledWith('too short');
  });
})
