import { ContextType } from '@/definitions/types';
import { GitHubRepository, GitHubUser } from '@/definitions/interfaces';
import { Language } from '@/definitions/enums';

interface UpdateUserAction {
    type: ActionType.UPDATE_USER;
    payload: GitHubUser | null;
}

interface UpdateReposAction {
    type: ActionType.UPDATE_REPOS;
    payload: GitHubRepository[] | [];
}

interface UpdateLangAction {
    type: ActionType.UPDATE_LANG;
    payload: Language;
}

type Action = UpdateUserAction | UpdateReposAction | UpdateLangAction;

export enum ActionType {
    UPDATE_USER,
    UPDATE_REPOS,
    UPDATE_LANG,
}

// Reducer
export function appReducer(state: ContextType, action: Action): ContextType {
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
