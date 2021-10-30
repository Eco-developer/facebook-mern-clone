import Avatar from '../Avatar/index.js';
import { connect } from 'react-redux';
import {
	useLocation,
	useHistory, 
} from 'react-router-dom';

const mapStateToProps = (state) => (
	{user : state.user}
)

const UserSettingBase = ({user}) => {
	const { pathname } = useLocation();
	const { push } = useHistory();
	const {
		displayName,
		displayPhoto,
		_id,
	} = user;

	const onClick = () => {
		if (!pathname.includes(_id)) {
			push(_id);
		}
	};

	return (
		<div 
			className='d-flex p-2 setting-user flex-grow-1 align-items-center rounded-10 transition-4s-eio cursor-pointer'
			onClick={onClick}
		>
			<Avatar src={displayPhoto}/>
			<div className='d-flex ml-2 flex-column justify-content-center flex-grow-1'>
				<h6 className='m-0 text_black'>
					{displayName}
				</h6>
				<p className='m-0 mt-1'>
					See your Profile
				</p>
			</div>
		</div>
	)
}

const UserSetting = connect(mapStateToProps)(UserSettingBase);

export default UserSetting;