import classes from './NavigationBar.module.css';
import { FC, ReactNode } from 'react';

const NavigationBar: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <nav className={classes.nav}>
            <ul>{children}</ul>
        </nav>
    );
};

export default NavigationBar;
