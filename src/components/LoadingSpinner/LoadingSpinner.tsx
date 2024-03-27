import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
            }}
        >
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle
                    className={classes.spin}
                    cx="400"
                    cy="400"
                    fill="none"
                    r="200"
                    strokeWidth="29"
                    stroke="#24292f"
                    strokeDasharray="595 1400"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default LoadingSpinner;
