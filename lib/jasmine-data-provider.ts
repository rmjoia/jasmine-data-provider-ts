/**
 * Uses an array of parameters to create each test case.
 *
 * @param values - The test case source array
 * @param func - The actual test fixture
 * @returns void
 *
 */
export function TestCase<T>(values: T[], func: (...params: T[]) => void) {
  for (let i = 0, count = values.length; i < count; i++) {
    func.apply(Object, [values[i]]);
  }
}

/**
 * Uses a function containing the parameters to create each test case.
 *
 * @param values - The test case source function
 * @param func - The actual test fixture
 * @returns void
 *
 */
export function TestSource<T>(
  values: () => T[],
  func: (...params: T[]) => void
) {
  for (let i = 0, count = values().length; i < count; i++) {
    func.apply(Object, [values()[i]]);
  }
}
