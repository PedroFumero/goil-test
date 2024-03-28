'use client';

import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import classes from './LangPicker.module.css';

const LangPicker = () => {
    const appCtx = useContext(StateContext);
    const lang = appCtx.state.lang;

    function handleClick() {
        appCtx.dispatch({
            type: ActionType.UPDATE_LANG,
            payload: lang === 'en' ? 'es' : 'en',
        });
    }

    return (
        <div className={classes['lang-icon']} onClick={handleClick}>
            <img
                src={`/${lang === 'en' ? 'es' : 'en'}-lang.svg`}
                alt={`${lang === 'en' ? 'Language' : 'Idioma'}`}
            />
        </div>
    );
};

export default LangPicker;
