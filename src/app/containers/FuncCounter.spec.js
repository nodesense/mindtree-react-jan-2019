import {mapStateToProps,
        mapDispatchToProps} from './FuncCounter';

import * as actions from '../state/actions';

describe("MapStateAndDispatch Test Suite", () => {
    it("mapStateToProps test", () => {
        const prevState = {
            counter: 100,
            items: []
        }

        const expectedProps = {
            counter: 100
        }

        expect(mapStateToProps(prevState)).toEqual(expectedProps)
    })

    it("mapDispatchToProps test", () => {
        const dispatch = jest.fn(); // create a mock function
        const getState = jest.fn(); // create a mock function

        const props = mapDispatchToProps(dispatch, getState);

        const expectedAction = actions.increment(1);

        props.increment();
        // is dispatch called or not
        // how many times it is called
        // what was the parameter it has been called with
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    })

    it("mapDispatchToProps test test", () => {
        const dispatch = jest.fn(); // create a mock function
        const getState = jest.fn(); // create a mock function

        const props = mapDispatchToProps(dispatch, getState);

        const expectedAction = actions.reset();

        props.reset();
        // is dispatch called or not
        // how many times it is called
        // what was the parameter it has been called with
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    })

})