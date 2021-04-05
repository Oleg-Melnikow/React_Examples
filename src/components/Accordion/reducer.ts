export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSE:
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}