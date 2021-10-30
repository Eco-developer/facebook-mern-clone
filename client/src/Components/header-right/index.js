import {
	MoreVert,
 	Forum,
 	NotificationsActive
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import {
	useLocation,
	useHistory, 
} from 'react-router-dom';
import { setHeader } from '../../actions/index.js';
import { FEED_PAGE } from '../../Const/routes.js';
import { CHATS } from '../../Const/header.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleHeader: (target) => dispatch(setHeader(target)),
	};
};

const HeaderRightBase = ({handleDropDown, handleHeader, handleOpenNotifications}) => {
	const { pathname } = useLocation();
	const { push } = useHistory();
	const isFeed = pathname === FEED_PAGE;

	const onHandleChats = () => {
		if (!isFeed) {
			push(FEED_PAGE);
		}
		handleHeader(CHATS);
	};
	return (
		<div className='header_left col-sm-3 p-0 d-flex h-fill align-items-center justify-content-end display-max pl-1 pr-1 overflow-y'>
			<IconButton
				className='mr-1 ml-1'
				onClick={onHandleChats}
			>
				<Forum className='text_black'/>
			</IconButton>
			<div className='mr-1 ml-1 p-relative'>
				<IconButton onClick={handleOpenNotifications}>
					<NotificationsActive 
						className='text_black'
					/>
				</IconButton>
			</div>
			<div className='mr-1 ml-1 p-relative'>
				<IconButton onClick={handleDropDown}>
					<MoreVert className='text_black'/>
				</IconButton>
			</div>	
		</div>
	)
}

const HeaderRight = connect(
	null,
	mapDispatchToProps
)(HeaderRightBase);

export default HeaderRight;