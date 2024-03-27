import './Button.css';
import Link from 'next/link';

const Button = ({ children, type = 'button', link, ...props }) => {
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
