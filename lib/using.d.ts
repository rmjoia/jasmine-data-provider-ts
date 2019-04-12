export declare function TestCase<T>(name: string, values: T[], func: (...params: T[]) => void): void;
export declare function TestSource<T>(values: () => T[], func: (...params: T[]) => void): void;
