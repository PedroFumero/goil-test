import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';

import es from '@/locale/es';
import en from '@/locale/en';

const useTranslate = () => {
    const appCtx = useContext(StateContext);
    const lang = appCtx.state.lang;
    let t;

    switch (lang) {
        case 'en':
            t = en;
            break;
        case 'es':
            t = es;
            break;
        default:
            t = en;
    }

    return (term) => t[term];
};

export default useTranslate;
