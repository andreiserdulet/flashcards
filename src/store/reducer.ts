import {Actions} from "./actions";
import {dummy_data} from "../dummy_data";

type ActionType = {
    type: Actions,
    payload?: number | boolean | [] | {},
}
type InitialState = {
    question: [],
    index: number,
    score: number,
    gameStatus: boolean,
}
export const initialState = {
    question: dummy_data,
    index: 0,
    score: 0,
    gameStatus: false
}


export const reducer = (state: InitialState, action: ActionType) => {

    switch (action.type) {
        case Actions.UPDATE_INDEX:
            return {index: state.index + 1};
        default:
            return state;
    }

}