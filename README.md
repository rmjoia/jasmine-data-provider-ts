# jasmine-data-provider-ts
jasmine parameter test using generics based on JP Castro's Jasmine Data Provider 
http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests/


# Installation
```
npm install jasmine-data-provider-ts
```

# Usage
```TypeScript

import {using} from 'jasmine-data-provider-ts'

describe('parameterised test', () => {
    using<string>('Cities', ['Almada', 'Lisboa', 'Cascais'], (value)=>{
        it(`should not be null: '${value}'`, () => {
            expect(value).not.toBeNull();
        });
    })
});

```
### Result
```
> jasmine
Randomized with seed 94217
Started
TAP version 13
.ok 1 - parameterised test : should not be null: 'Cascais'
.ok 2 - parameterised test : should not be null: 'Lisboa'
.ok 3 - parameterised test : should not be null: 'Almada'



3 specs, 0 failures
Finished in 0.016 seconds
Randomized with seed 94217 (jasmine --random=true --seed=94217)
1..3
# 3 specs, 0 failures, 0 skipped, 0 disabled in 0.017s.
# NOTE: disabled specs are usually a result of xdescribe.
```
