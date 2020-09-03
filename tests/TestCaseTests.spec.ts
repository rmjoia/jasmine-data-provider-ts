import { TestCase } from "../lib/jasmine-data-provider";

describe("parameterised test using an Array<T> as source", () => {
  TestCase<string>(["Almada", "Lisboa", "Cascais"], value => {
    it(`should not be null: '${value}'`, () => {
      expect(value).not.toBeNull();
    });
  });
});
