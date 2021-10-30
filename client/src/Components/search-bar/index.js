import Input from '../Input/index.js';
import { Search } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const SearchBar = ({onChange, onClick, value}) => (
	<div className='d-flex flex-column mb-3'>
		<div className='pb-1 mb-2 border-bottom border-ws'>
			<h6 className='m-0 text_black'>
				Search
			</h6>
		</div>
		<div className='d-flex align-items-center '>
			<Input
				onChange={onChange}
				value={value}
				highlight='w-100'
			/>
			<div className='ml-1'>
				<IconButton
					onClick={onClick}
				>
					<Search className='text-primary'/>
				</IconButton>
			</div>
		</div>
	</div>
)

export default SearchBar;