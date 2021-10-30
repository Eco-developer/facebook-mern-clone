import { PostLoyout } from '../Loyouts/index.js';
import Avatar from '../Avatar/index.js';
import { 
	LocationOn,
	PersonAdd,
} from '@material-ui/icons';

const PeopleContainer = ({id, goToProfile, src='', name, state, country}) => (
	<PostLoyout>
		<div 
			className='d-flex align-items-center cursor-pointer'
			onClick={() => goToProfile(id)}
		>
			<Avatar src={src}/>
			<div className='d-flex flex-column flex-grow-1 ml-3'>
				<h4 className='m-0 text_black'>{name}</h4>
				<div className='d-flex align-items-center mt-1'>
					<LocationOn className='text_black'/>
					<p className='m-0 ml-1 text-secondary'>
						Lives in {state ? `${state}, `: ''}{country}
					</p>
				</div>	
			</div>
			<div className='p-2 rounded-circle bg-lightblue'>
				<PersonAdd className='text-primary'/>
			</div>
		</div>
	</PostLoyout>
)

export default PeopleContainer;