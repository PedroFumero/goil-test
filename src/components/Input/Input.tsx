import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';

const Input: FC<{
    type: HTMLInputTypeAttribute;
    label?: string;
    id: string;
    placeholder: string;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}> = ({ type, label, id, placeholder, ...props }) => {
    return (
        <>
            {label && <label htmlFor="username">{label}: </label>}
            <input
                {...props}
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
            />
        </>
    );
};

export default Input;
