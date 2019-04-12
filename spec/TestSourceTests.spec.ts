import { TestSource } from "../lib/jasmine-data-provider";

class SampleClass {
  constructor(public foo: any, public bar: any, public expected: string) {}
}

describe("parameterised test using a function as source", function() {
  function provider(): any[] {
    return [
      { a: 2, b: 3, expected: 5 },
      { a: "14", b: 15, expected: "1415" },
      { a: 12, b: "13", expected: "1213" },
      { a: "22", b: "13", expected: "2213" }
    ];
  }

  TestSource<any>(provider, function(data) {
    it("should return value using operator +", function() {
      var result = data.a + data.b;
      expect(result).toEqual(data.expected);
    });
  });

  function sampleClassProvider(): SampleClass[] {
    return [
      new SampleClass("foo1", "bar1", "foo1bar1"),
      new SampleClass("f00", "bar", "f00bar")
    ];
  }

  TestSource<SampleClass>(sampleClassProvider, function(data) {
    it(`'${data.foo +
      data.bar}' and '${data.expected}' should be equal`, function() {
      expect(data.foo + data.bar).toEqual(data.expected);
    });
  });
});
