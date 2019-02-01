import {increment} from './actions';
import * as ActionTypes from './action-types';

describe ("Test Action Creators", () => {
    it("increment action test", () => {
        const action = increment(10);
        const expected = {
            type: ActionTypes.INCREMENT,
            payload: {value: 10}
        }

        // deep equal
        expect(action).toEqual(expected);
    })
})