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

    const langEn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-1{fill:#142359;}.cls-2{fill:#bf2121;}.cls-3{fill:#fff;}</style></defs><title/><g id="United_States"><path class="cls-1" d="M32,8V28.57H8.25a24,24,0,0,1,6.6-13.35,22.57,22.57,0,0,1,2.59-2.29A23.89,23.89,0,0,1,32,8Z"/><path class="cls-2" d="M48.79,14.86H32V8A23.94,23.94,0,0,1,48.79,14.86Z"/><path class="cls-3" d="M53.68,21.71H32V14.86H48.79A23.86,23.86,0,0,1,53.68,21.71Z"/><path class="cls-2" d="M55.75,28.57H32V21.71H53.68A23.43,23.43,0,0,1,55.75,28.57Z"/><path class="cls-3" d="M56,32a22.8,22.8,0,0,1-.25,3.43H8.25a23.65,23.65,0,0,1,0-6.86h47.5A22.8,22.8,0,0,1,56,32Z"/><path class="cls-2" d="M55.75,35.43a23.43,23.43,0,0,1-2.07,6.86H10.32a23.43,23.43,0,0,1-2.07-6.86Z"/><path class="cls-2" d="M48.79,49.14a24,24,0,0,1-33.58,0Z"/><path class="cls-3" d="M53.68,42.29a23.86,23.86,0,0,1-4.89,6.85H15.21a23.86,23.86,0,0,1-4.89-6.85Z"/><polygon class="cls-3" points="24.71 10.79 25.41 12.93 27.66 12.93 25.84 14.25 26.54 16.39 24.71 15.07 22.89 16.39 23.59 14.25 21.76 12.93 24.02 12.93 24.71 10.79"/><polygon class="cls-3" points="24.71 19.39 25.41 21.53 27.66 21.53 25.84 22.86 26.54 25 24.71 23.68 22.89 25 23.59 22.86 21.76 21.53 24.02 21.53 24.71 19.39"/><polygon class="cls-3" points="16.29 19.39 16.98 21.53 19.24 21.53 17.41 22.86 18.11 25 16.29 23.68 14.46 25 15.16 22.86 13.34 21.53 15.59 21.53 16.29 19.39"/><path class="cls-3" d="M17.41,14.25l.7,2.14-1.82-1.32-1.82,1.32.38-1.17a22.57,22.57,0,0,1,2.59-2.29h1.8Z"/></g></svg>`;

    const langEs = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><style>.cls-1{fill:#c70318;}.cls-2{fill:#ffc500;}</style></defs><title/><g id="Spain"><path class="cls-1" d="M52.77,20H11.23a24,24,0,0,1,41.54,0Z"/><path class="cls-1" d="M52.77,44a24,24,0,0,1-41.54,0Z"/><path class="cls-2" d="M56,32a23.73,23.73,0,0,1-3.23,12H11.23a23.91,23.91,0,0,1,0-24H52.77A23.73,23.73,0,0,1,56,32Z"/></g></svg>`;

    function handleClick() {
        appCtx.dispatch({
            type: ActionType.UPDATE_LANG,
            payload:
                lang === Language.English ? Language.Spanish : Language.English,
        });
    }

    return (
        <div className={classes['lang-icon']} onClick={handleClick}>
            <div
                id="lang-picker"
                dangerouslySetInnerHTML={{
                    __html: lang === Language.English ? langEs : langEn,
                }}
            />
        </div>
    );
};

export default LangPicker;
