import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';

const useFormatDate = () => {
    const appCtx = useContext(StateContext);
    const lang = appCtx.lang;

    return (date: string) => {
        return new Date(date).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
};

export default useFormatDate;
