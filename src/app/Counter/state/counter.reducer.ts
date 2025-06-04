import { createReducer, on } from "@ngrx/store";
import { INCREMENT,DECREMENT,RESET, customIncrement, customNameChnage } from "./counter.actions";
import { initailState } from "./counter.state";

export function counterReducer(state:any, action:any) {
    return _counterReducer(state, action);
    }

    const _counterReducer = createReducer(
        initailState
        ,on(INCREMENT, (state) => {
            return { ...state, counter: state.counter + 1 };
        }) 
        ,on(DECREMENT, (state) => {
            return { ...state, counter: state.counter - 1 };
        })
        ,on(RESET, (state) => { 
            return { ...state, counter: 0 };
        })
        ,on(customIncrement, (state, {value} ) =>  {
            return { ...state, counter: state.counter+value
             };
        })
        ,on(customNameChnage, (state) =>  {
            return { ...state, text:' Rahman',
             };
        }),
    );
    
