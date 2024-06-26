import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className="flex-center">
            <div className={classes['loading-spinner-size']}>
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
        </div>
    );
};

export default LoadingSpinner;
