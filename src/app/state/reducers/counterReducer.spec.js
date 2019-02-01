import counterReducer from './counterReducer';
import {increment} from '../actions';


describe('counterReducer Reducer test', () => {
    it("increment test", () => {
        const action = increment(2);
        const prevState = 100;

        expect(counterReducer(prevState, action))
            .toBe(102);
    })

    it("test default state", () => {
        const action = {type: 'UNKNOWN'};
        const prevState = undefined;

        expect(counterReducer(prevState, action))
            .toBe(0);
    })
})