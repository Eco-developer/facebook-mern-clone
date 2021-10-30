import FACEBOOK_API from '../../Const/facebookApi.js';
import { Avatar as MaterialUiAvatar} from '@material-ui/core';
import { connect } from 'react-redux';
import {
	useLocation,
	useHistory, 
} from 'react-router-dom';
import { setLoadingProfile } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleLoading: (status) => dispatch(setLoadingProfile(status)),
	};
};

const AvatarBase = ({trigger=false, src='', className='', style={}, uid='', handleLoading}) => {
	const { pathname } = useLocation();
	const { push } = useHistory();

	const onClick = () => {
		if (trigger) {
			if (!pathname.includes(uid)) {
				handleLoading(true);
				push(uid);
			}
		}
	}

	return (
		<MaterialUiAvatar 
			onClick={onClick}
			className={`${className} cursor-pointer`}
			src={src ? `${FACEBOOK_API}retrieve/images/single?name=${src}`: ''}
			style={style}
		/>
	)
}

const Avatar = connect(
	null,
	mapDispatchToProps
)(AvatarBase);

export default Avatar;