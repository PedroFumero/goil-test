import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';
import { LanguageDictionary } from '@/definitions/interfaces';
import es from '@/locale/es';
import en from '@/locale/en';
import { Language } from '@/definitions/enums';

const useTranslate = () => {
    const appCtx = useContext(StateContext);
    const lang = appCtx.lang;
    let t: LanguageDictionary;

    switch (lang) {
        case Language.English:
            t = en;
            break;
        case Language.Spanish:
            t = es;
            break;
        default:
            t = en;
    }

    return (term: string): string => t[term];
};

export default useTranslate;
