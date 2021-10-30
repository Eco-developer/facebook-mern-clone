import './ripple.css';

const DivButton = ({children, margin='', active='', onClick}) =>  {
	
    const createRipple = (event) => {
        let thisButton = event.target;
        if (event.target.localName === 'path') {
            thisButton = event.target.parentElement.parentElement;
        }
        if (event.target.localName === 'svg'){
            thisButton = event.target.parentElement;
        }
        const rect = thisButton.getBoundingClientRect();
        const circle = document.createElement('span');
        const diameter = Math.max(thisButton.clientWidth, thisButton.clientHeight); 
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');
        circle.style.backgroundColor = active ? '#FFF' : 'rgba(0, 105, 217, 0.6)';

        const ripple = thisButton.getElementsByClassName('ripple')[0]
        if (ripple) {
            ripple.remove()
        }
        thisButton.appendChild(circle);
    }

	return (
		<div
			className={`flex-grow-1 d-flex border border-primary cursor-pointer justify-content-center align-items-center p-2 rounded-10 p-relative overflow-hidden transition  ${margin} ${active}`}
			onClick={(e) => {
                if (onClick) {onClick(e)}
                createRipple(e)
            }}
		>
			{children}
		</div>
	)
}




export default DivButton;