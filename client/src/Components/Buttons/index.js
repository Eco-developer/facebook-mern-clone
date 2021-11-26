import SentButton from './sent-button.js';
import LoadMoreButton from './load-more-button.js';
import ProfileButton from './profile-button.js';
import BackButton from './back-button.js'
import BackButtonLg from './back-button-lg.js';
import FilterButton from './filter-button.js';
import './ripple.css';

const Button = ({children, type='button', onClick, className='btn btn-primary btn-lg flex-grow-1', disabled=false}) => {
    const createRipple = (event) => {
        const thisButton = event.target;
        const rect = thisButton.getBoundingClientRect();
        const circle = document.createElement('span');
        const diameter = Math.max(thisButton.clientWidth, thisButton.clientHeight); 
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        if (className.includes('bg-white')) {
            circle.style.backgroundColor = 'rgba(0, 105, 217, 0.6)';
        }
        const ripple = thisButton.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        thisButton.appendChild(circle);
    };

    return (
        <button
            className={className}
            type={type}
            onClick={(e) => {
                if (onClick) {onClick(e)}
                createRipple(e)
                }}
            disabled={disabled}
        >
            {children}
        </button>
    )


}

export { 
    SentButton,
    LoadMoreButton,
    ProfileButton,
    BackButton,
    BackButtonLg,
    FilterButton,
};
export default Button;