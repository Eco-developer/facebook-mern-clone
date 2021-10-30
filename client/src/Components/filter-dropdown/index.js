import FilterDropDownOption from '../filter-dropdown-option/index.js';
import {v4 as uuid} from 'uuid';

const FilterDropDown = ({options, nodeRef, handleOption, selected}) => (
	<div className='d-flex filter-dropdown overflow-y w-100 transition-4s-eio mb-1'>
		<div 
			className='height-fit d-flex flex-column flex-grow-1' 
			ref={nodeRef}
		>
			{options.length ?
				options.map((option) => (
					<FilterDropDownOption
						key={uuid()}
						option={option}
						handleOption={handleOption}
						selected={selected}
					/>
				))
			: null}
		</div>
	</div>
)

export default FilterDropDown;