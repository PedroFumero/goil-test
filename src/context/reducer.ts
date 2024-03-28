// Define types
interface AppState {
    user: any;
    repos: any;
    lang: string;
}

interface UpdateUserAction {
    type: ActionType.UPDATE_USER;
    payload: any;
}

interface UpdateReposAction {
    type: ActionType.UPDATE_REPOS;
    payload: any;
}

interface UpdateLangAction {
    type: ActionType.UPDATE_LANG;
    payload: string;
}

type Action = UpdateUserAction | UpdateReposAction | UpdateLangAction;

// Enum
export enum ActionType {
    UPDATE_USER,
    UPDATE_REPOS,
    UPDATE_LANG,
}

// Reducer
export function appReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case ActionType.UPDATE_USER:
            return { ...state, user: action.payload };
        case ActionType.UPDATE_REPOS:
            return { ...state, repos: action.payload };
        case ActionType.UPDATE_LANG:
            return { ...state, lang: action.payload };
        default:
            return state;
    }
}
