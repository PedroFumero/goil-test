'use client';

import { useContext } from 'react';
import { StateContext } from '@/context/StateContext';
import { ActionType } from '@/context/reducer';
import classes from './LangPicker.module.css';
import { Language } from '@/definitions/enums';
import useTranslate from '@/hooks/translate-hook';

const LangPicker = () => {
    const appCtx = useContext(StateContext);
    const lang = appCtx.lang;
    const translate = useTranslate();

    function handleClick() {
        appCtx.dispatch({
            type: ActionType.UPDATE_LANG,
            payload:
                lang === Language.English ? Language.Spanish : Language.English,
        });
    }

    return (
        <div className={classes['lang-icon']} onClick={handleClick}>
            <img
                src={`/${lang === Language.English ? Language.Spanish : Language.English}-lang.svg`}
                alt={translate('language')}
            />
        </div>
    );
};

export default LangPicker;
