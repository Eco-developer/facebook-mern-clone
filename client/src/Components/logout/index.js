import SettingOption from '../setting-option/index.js';
import FACEBOOK_API from '../../Const/facebookApi.js';
import axios from 'axios';
import { ExitToApp } from '@material-ui/icons';
import { connect } from 'react-redux';
import { setUser } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleUser: (data) => dispatch(setUser(data))
	};
};

const LogoutBase = ({handleUser}) => {
	const onClick = async () => {
		try {
		await axios.get(`${FACEBOOK_API}logout`, {withCredentials: true});
		handleUser(null);
		} catch (error){
			console.log(error.message);
		}
	}

	return (
		<SettingOption
			onClick={onClick}
			Icon={ExitToApp}
			arrow={false}
			section='Log Out'
			iconClass='text-danger'
		/>
	)
}

const Logout = connect(
	null,
	mapDispatchToProps
)(LogoutBase)

export default Logout;