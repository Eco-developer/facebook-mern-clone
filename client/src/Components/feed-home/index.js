import Sidebar from '../Sidebar/index.js';
import News from '../News/index.js';
import ChatResipientsSide from '../chat-resipients-side/index.js';
import { FeedLoyout } from '../Loyouts/index.js';
import { connect } from 'react-redux';
import { setResipientTarget } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleResipientTarget: (target) => dispatch(setResipientTarget(target)),
	};
};

const mapStateToProps = (state) => (
	{ resipientTarget : state.resipientTarget }
)

const FeedHomeBase = ({handleResipientTarget, resipientTarget}) => {
	return (
		<FeedLoyout>
			<Sidebar/>
			<News/>
			<ChatResipientsSide 
				resipientTarget={resipientTarget}
				setResipientTarget={handleResipientTarget}
				extend='col-md-side-custom display-max'
			/>
		</FeedLoyout>
	)
}

const FeedHome = connect(
	mapStateToProps,
	mapDispatchToProps
)(FeedHomeBase);

export default FeedHome;