import FilterDropDown from '../filter-dropdown/index.js';
import Button from '../Buttons/index.js';
import { ArrowForwardIos } from '@material-ui/icons';
import { 
	useState, 
	useRef, 
} from 'react';

const FilterDropDownContainer = ({options=[], filter, handleFilters, selected}) => {
	const [showFlag, setShow] = useState(false);
	const [warning, setWarning] = useState(false);
	const dropDownRef = useRef();

	const onSetDropdown = () => {
		if (options.length) {
			const target = dropDownRef?.current;
			const { height } = target.getBoundingClientRect();
			const { parentElement } = target;

			if (showFlag) {
				setShow(false);
				parentElement.style.setProperty('height', '0');
				return;
			} else {
				setShow(true)
				parentElement.style.setProperty('height', `${height}px`);
				return;
			}	
		} else {
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 1500);
		}
	}

	const handleOption = (option={}) => {
		handleFilters({type: filter, payload: option});
		onSetDropdown();
	}

	const onSetDefault = () => {
		if (showFlag) {
			onSetDropdown();
		}
		setTimeout(()=>{
			handleFilters({type: 'default'});
		}, 400);
	}

	return (
		<>
			<div 
				className='d-flex pt-1 pb-1 cursor-pointer mt-1 mb-1 align-items-center'
				onClick={onSetDropdown}
			>
				<h6 className='m-0 flex-grow-1'>{filter}</h6>
				<ArrowForwardIos 
					className={`text_black transition-4s-eio ${showFlag ? 'rotate-90' : ''}`}
				/>

			</div>
			<FilterDropDown 
				options={options}
				nodeRef={dropDownRef}
				handleOption={handleOption}
				selected={selected}
			/>
			{warning && <p className='font-small text-danger mb-1'>There are no available options</p>}
			{filter === 'State' ?
				(<div className='mb-2 mt-1 w-100 d-flex'>
					<Button onClick={onSetDefault}>
						Reset Filters
					</Button>
				 </div>)
			:null}
		</>
	)
}

export default FilterDropDownContainer;