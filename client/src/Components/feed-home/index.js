import Sidebar from '../Sidebar/index.js';
import News from '../News/index.js';
import ChatRecipientsSide from '../chat-recipients-side/index.js';
import { FeedLoyout } from '../Loyouts/index.js';
import { connect } from 'react-redux';
import { setRecipientTarget } from '../../actions/index.js';

const mapDispatchToProps = (dispatch) => {
	return {
		handleRecipientTarget: (target) => dispatch(setRecipientTarget(target)),
	};
};

const mapStateToProps = (state) => (
	{ recipientTarget : state.recipientTarget }
)

const FeedHomeBase = ({handleRecipientTarget, recipientTarget}) => {
	return (
		<FeedLoyout>
			<Sidebar/>
			<News/>
			<ChatResipientsSide 
				recipientTarget={recipientTarget}
				setRecipientTarget={handleRecipientTarget}
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