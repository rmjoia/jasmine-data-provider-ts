import { using } from "../lib/using";


describe('parameterised test', () => {
    using<string>('Cities', ['Almada', 'Lisboa', 'Cascais'], (value)=>{
        it(`${value} should not be null`, () => {
            expect(value).not.toBeNull();
        });
    })
});