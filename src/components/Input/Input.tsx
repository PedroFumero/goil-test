const Input = ({ type, label, id, placeholder, ...props }) => {
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
