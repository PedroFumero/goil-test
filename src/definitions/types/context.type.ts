import { GitHubRepository, GitHubUser } from '@/definitions/interfaces';
import { Dispatch } from 'react';
import { Language } from '@/definitions/enums';

export type ContextType = {
    user: GitHubUser | null;
    repos: GitHubRepository[] | [];
    lang: Language;
    dispatch: Dispatch<any>;
};
