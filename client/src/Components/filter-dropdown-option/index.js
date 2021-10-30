const FilterDropDownOption = ({option, handleOption, selected}) => {
	const onClick = () => {
		handleOption(option)
	}

	const isSelected = selected?.isoCode === option?.isoCode;

	return (
		<div 
			className={`flex-grow-1 d-flex justify-content-center p-2 dropdown-option transition-4s-eio cursor-pointer ${isSelected ? 'bg-blue' : ''}`}
			onClick={onClick}
		>
			<p className='m-0 text_black'>{option.name}</p>
		</div>
	)
}

export default FilterDropDownOption;