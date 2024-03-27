// Define types
interface AppState {
    user: any; // Adjust 'any' to the actual type of 'user'
    repos: any; // Adjust 'any' to the actual type of 'repos'
    lang: string; // Adjust 'string' to the actual type of 'lang'
    theme: string; // Adjust 'string' to the actual type of 'theme'
}

interface UpdateUserAction {
    type: ActionType.UPDATE_USER;
    payload: any; // Adjust 'any' to the actual type of 'user'
}

interface UpdateReposAction {
    type: ActionType.UPDATE_REPOS;
    payload: any; // Adjust 'any' to the actual type of 'repos'
}

interface UpdateLangAction {
    type: ActionType.UPDATE_LANG;
    payload: string; // Adjust 'string' to the actual type of 'lang'
}

interface UpdateThemeAction {
    type: ActionType.UPDATE_THEME;
    payload: string; // Adjust 'string' to the actual type of 'theme'
}

type Action =
    | UpdateUserAction
    | UpdateReposAction
    | UpdateLangAction
    | UpdateThemeAction;

// Enum
export enum ActionType {
    UPDATE_USER,
    UPDATE_REPOS,
    UPDATE_THEME,
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
        case ActionType.UPDATE_THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
}
