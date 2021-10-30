import { connect } from 'react-redux';
import { setHeader } from '../../actions/index.js';
import {
	useLocation,
	useHistory, 
} from 'react-router-dom';
import { FEED_PAGE } from '../../Const/routes.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleHeader: (target) => dispatch(setHeader(target)),
	};
};

const mapStateToProps = (state) => (
	{ headerPage: state.header}
)

const HeaderCenterColBase = ({target, headerPage, handleHeader, children}) => {
	const { pathname } = useLocation();
	const { push } = useHistory();
	const isFeed = pathname === FEED_PAGE;

	const onClick = () => {
		if (!isFeed) {
			push(FEED_PAGE);
		}
		handleHeader(target);
	};

	return (
		<div 
			onClick={onClick}
			className={`header_center_col d-flex flex-grow-1 justify-content-center align-items-center ${headerPage[target] ? 'border-bottom-2 border-primary': ""}`}
		>
			<div className={`d-flex flex-grow-1 justify-content-center align-items-center h-fill m-1 rounded cursor-pointer ${headerPage[target] ? 'bg-active' : ''}`}>
				{children}
			</div>
		</div>
	)
}

const HeaderCenterCol = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderCenterColBase);

export default HeaderCenterCol;