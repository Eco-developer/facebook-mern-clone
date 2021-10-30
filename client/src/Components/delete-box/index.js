import Button from '../Buttons/index.js';
import axios from 'axios';
import FACEBOOK_API from '../../Const/facebookApi.js';
import { PostLoyout } from '../Loyouts/index.js';
import { Warning } from '@material-ui/icons';
import { connect } from 'react-redux';
import { setExpandedPost } from '../../actions/index.js';

const mapStateToProps = (state) => (
	{ userId : state.user._id }
)

const mapDispatchToProps = (dispatch) => {
	return {
		handleExpandedPost: (data) => dispatch(setExpandedPost(data))
	};
};

const DeleteBoxBase = ({id, setClose, userId, handleExpandedPost}) => {

	const onHandleExpandedPost = () => {
		handleExpandedPost(null)
	}

	const handleSubmit = async () => {
		try {
			await axios.delete(
				`${FACEBOOK_API}delete/post/${id}-${userId}`);
		} catch (err) {
			console.log(err);
		}
		setClose();
		onHandleExpandedPost();
	};

	return (
		<div className='delete-box-container'>
			<PostLoyout 
				extend='align-items-center justify-content-center'
				mnres={false}
			>
				<div className='d-flex flex-column'>
					<div className='d-flex flex-column mb-3 align-items-center'>
						<Warning className='text-danger font-6'/>
						<h5 className='m-0 mt-2 text_black text-center'>
							Are you sure you want to delete this post?
						</h5>
					</div>
					<div className='d-flex'>
						<Button 
							className='btn btn-danger flex-grow-1 mr-2'
							onClick={handleSubmit}
						>
							Delete
						</Button>
						<Button 
							className='btn btn-secondary flex-grow-1'
							onClick={setClose}
						>
							Cancel
						</Button>
					</div>
				</div>
			</PostLoyout>
		</div>
	)
}

const DeleteBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(DeleteBoxBase);

export default DeleteBox;