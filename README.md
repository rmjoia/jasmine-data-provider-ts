# jasmine-data-provider-ts
jasmine parameter test using generics based on JP Castro's Jasmine Data Provider 
http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests/


# Installation
```
npm install jasmine-data-provider-ts
```

# Usage with Array<T>
```TypeScript

import {using} from 'jasmine-data-provider-ts'

describe('parameterised test', () => {
    TestCase<string>(['Almada', 'Lisboa', 'Cascais'], (value)=>{
        it(`should not be null: '${value}'`, () => {
            expect(value).not.toBeNull();
        });
    })
});

```
### Result with Array<T>
```
> jasmine
Randomized with seed 94217
Started
TAP version 13
.ok 1 - parameterised test using an Array<T> as source : should not be null: 'Cascais'
.ok 2 - parameterised test using an Array<T> as source : should not be null: 'Lisboa'
.ok 3 - parameterised test using an Array<T> as source : should not be null: 'Almada'



3 specs, 0 failures
Finished in 0.016 seconds
Randomized with seed 94217 (jasmine --random=true --seed=94217)
1..3
# 3 specs, 0 failures, 0 skipped, 0 disabled in 0.017s.
# NOTE: disabled specs are usually a result of xdescribe.
```

# Usage with function
```TypeScript

import {using} from 'jasmine-data-provider-ts'

describe('parameterised test', () => {
    TestCase<string>('Cities', ['Almada', 'Lisboa', 'Cascais'], (value)=>{
        it(`should not be null: '${value}'`, () => {
            expect(value).not.toBeNull();
        });
    })
});

```
### Result with function
```
> jasmine
Randomized with seed 10614
Started
TAP version 13
.ok 1 - parameterised test using a function as source : should return value using operator +
.ok 2 - parameterised test using a function as source : should return value using operator +
.ok 3 - parameterised test using a function as source : should return value using operator +
.ok 4 - parameterised test using a function as source : should return value using operator +



4 specs, 0 failures
Finished in 0.014 seconds
Randomized with seed 10614 (jasmine --random=true --seed=10614)
1..4
# 4 specs, 0 failures, 0 skipped, 0 disabled in 0.015s.
# NOTE: disabled specs are usually a result of xdescribe.
```

