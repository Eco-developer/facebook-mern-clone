import SidebarRow from '../sidebar-row/index.js';
import {
	LocalHospital,
 	ExpandMoreOutlined, 
 	People,
 	Chat,
 	VideoLibrary,
 } from '@material-ui/icons';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setHeader} from '../../actions/index.js';
import * as FEED from '../../Const/header.js';
import { setLoadingProfile } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleHeader: (target) => dispatch(setHeader(target)),
		handleLoading: (status) => dispatch(setLoadingProfile(status)),
	};
};

const mapStateToProps = (state) => (
	{ user : state.user }
)

const SidebarBase = ({handleHeader, handleLoading, user}) => {
	const { push } = useHistory();
	const {
		displayName,
		displayPhoto,
		_id,
	} = user;

	const goProfile = () => {
		handleLoading(true);
		push(_id);
	};

	return (
		<div className='col-md-side-custom display-none m-0 p-0 overflow-y'>
			<div className='p-2 pr-3 m-2 mt-3 mb-3 d-flex flex-column'>
				<SidebarRow 
					avatar={true}
					src={displayPhoto} 
					title={displayName}
					onClick={goProfile}
				/>
				<SidebarRow 
					Icon={LocalHospital} 
					title='Covid-19 information center'
					onClick={() => handleHeader(FEED.COVID_19)}
				/>
				<SidebarRow 
					Icon={People} 
					title='Friends'
					onClick={() => handleHeader(FEED.PEOPLE)}
				/>
				<SidebarRow 
					Icon={Chat} 
					title='Messenger'
					onClick={() => handleHeader(FEED.CHATS)}
				/>
				{/*<SidebarRow 
					Icon={Storefront} 
					title='Marketplace'
					onClick={() => handleHeader(FEED.MARKETPLACE)}
				/>*/}
				<SidebarRow 
					Icon={VideoLibrary} 
					title='Videos'
					onClick={() => handleHeader(FEED.VIDEOS)}
				/>
				<SidebarRow 
					Icon={ExpandMoreOutlined} 
					title='More'
				/>
			</div>
			<div className='bar display-max'>
			</div>
		</div>
	)
}

const Sidebar = connect(
	mapStateToProps,
	mapDispatchToProps
)(SidebarBase)

export default Sidebar;