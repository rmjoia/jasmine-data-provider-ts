export function TestCase<T>(
  name: string,
  values: T[],
  func: (...params: T[]) => void
) {
  for (var i = 0, count = values.length; i < count; i++) {
    func.apply(Object, [values[i]]);
  }
}

export function TestSource<T>(
  values: () => T[],
  func: (...params: T[]) => void
) {
  for (var i = 0, count = values().length; i < count; i++) {
    func.apply(Object, [values()[i]]);
  }
}
