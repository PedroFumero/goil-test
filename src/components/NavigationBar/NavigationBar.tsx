import Link from 'next/link';

import classes from './NavigationBar.module.css';

const NavigationBar = ({ children }) => {
    return (
        <nav className={classes.nav}>
            <ul>{children}</ul>
        </nav>
    );
};

export default NavigationBar;
