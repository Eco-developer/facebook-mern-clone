import { TuneRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const FilterButton = ({onClick}) => (
	<div 
		className='p-absolute bg-white rounded-circle p-0 m-0 shadow-md filter-button display-min'
		onClick={onClick}
	>
			<IconButton>
				<TuneRounded/>
			</IconButton>
	</div>
)

export default FilterButton;