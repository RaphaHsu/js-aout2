import { when } from "jest-when";
import { Logger } from "../src/Logger";

describe('Logger', function () {
  it('Returns_ByDefault_worksForHardCodedArgument', function () {
    // Arrange
    const fakeLogger = new Logger();

    // 1. Manual mock return value
    /**
     * const fakeFn = jest.fn((fileName) => {
     *   switch (fileName) {
     *     case 'a.txt':
     *       return 'too short'
     *     default:
     *   }
     * })
     *
     * const fakeFn =
     * fakeLogger.logError = fakeFn
     */

    // 2. Fluent mock return value
    const fakeFn = jest.fn();
    when(fakeFn).calledWith('a.txt').mockReturnValueOnce('too short')
    fakeLogger.logError = fakeFn

    // 3. others - 1
    /**
     * jest.mock('../src/Logger)
     * import { Logger } from '../src/Logger'
     * fakeLogger.logError.mockImplementation((fileName) => {
     *   switch (fileName) {
     *     case 'a.txt':
     *       return 'too short'
     *     default:
     *   }
     * })
     */

    // 3-2
    /**
     * const fakeFn = jest.fn().mockReturnValue('too short')
     * fakeLogger.logError = fakeFn
     */

    // No Act, or Assert the value of function return

    // Assert
    expect(fakeLogger.logError('a.txt')).toBe('too short')

    // or assert input and output
    expect(fakeLogger.logError).toHaveBeenCalledWith('a.txt')
  });
})
