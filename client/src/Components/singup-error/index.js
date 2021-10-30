import EditHeader from '../edit-header/index.js';
import { Warning } from '@material-ui/icons';

const SingupError = ({error, onClick}) => (
	<div className='delete-box-container'>
		<div className='error-box p-3 pt-4 bg-white rounded-10 d-flex flex-column'>
			<EditHeader onClick={onClick}/>
			<div className='d-flex align-items-center justify-content-center flex-grow-1'>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<Warning className='text-danger font-6'/>
					<h5 className='m-0 mt-2 text_black text-center'>
						{error}
					</h5>
				</div>
			</div>
			
		</div>
	</div>
)

export default SingupError;