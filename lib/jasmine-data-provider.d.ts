/**
 * Uses an array of parameters to create each test case.
 *
 * @param values - The test case source array
 * @param func - The actual test fixture
 * @returns void
 *
 */
export declare function TestCase<T>(values: T[], func: (...params: T[]) => void): void;
/**
 * Uses a function containing the parameters to create each test case.
 *
 * @param values - The test case source function
 * @param func - The actual test fixture
 * @returns void
 *
 */
export declare function TestSource<T>(values: () => T[], func: (...params: T[]) => void): void;
//# sourceMappingURL=jasmine-data-provider.d.ts.map