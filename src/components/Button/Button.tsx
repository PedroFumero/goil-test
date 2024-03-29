import './Button.css';
import { FC, ReactNode } from 'react';

const Button: FC<{
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    link?: string;
    className?: string;
}> = ({ children, type = 'button', link, ...props }) => {
    return link ? (
        <a href={link}>
            <button type={type} {...props}>
                {children}
            </button>
        </a>
    ) : (
        <button type={type} {...props}>
            {children}
        </button>
    );
};

export default Button;
