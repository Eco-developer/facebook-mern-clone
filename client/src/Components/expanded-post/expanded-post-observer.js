import ExpandedPostContainer from './expanded-post-container.js';
import { 
	useRef,
	useState,
} from 'react';
import setStyles from '../../services/setStyles/index.js';

const ExpandedPostObserver = ({data, onHandleExpandedPost, handleRePost}) => {
	const heightRef = useRef();
	const [displayComments, setDisplay] = useState(false);
	const initialState = {
		comments_id: data?.comments_id, 
		replay_name: null, 
		isComment: true,
	};
	const [commentsId, setCommentsId] = useState(initialState)

	const onSetComments = () => {
		const target = heightRef?.current?.getBoundingClientRect();
		if (target) {
			const { height } = target;
			const { parentElement } = heightRef.current;

			const defaultStyles = {
				height: '0',
    			'border-color': 'white',
			}

			const upDatedStyles = {
				height: `${height}px`,
	    		'border-color': '#007bff',
	    		'max-height': '-webkit-fill-available',
			}
			parentElement.parentElement.style.setProperty('max-height', 'calc(100vh - 210px)')
			if (displayComments) {
				setStyles(
					parentElement, 
					displayComments,
					defaultStyles,
					upDatedStyles
				)
				setDisplay(false);
				return;
			} else {
				setStyles(
					parentElement, 
					displayComments,
					defaultStyles,
					upDatedStyles
				)
				setDisplay(true);
				return;
			}
		}
	}

	const handleCommentsId = (id, name) => {
		onSetComments();
		setCommentsId({comments_id: id, replay_name: name, isComment: false});
	};

	const setdefaultCommentsId = () => {
		setCommentsId(initialState);
	};

	const onHandleRePost = () => {
		handleRePost({postUrl: data.postUrl, name: data.name});
	};

	return (
		<ExpandedPostContainer
			data={data}
			commentsId={commentsId}
			setdefaultCommentsId={setdefaultCommentsId}
			onSetComments={onSetComments}
			handleCommentsId={handleCommentsId}
			onHandleExpandedPost={onHandleExpandedPost}
			onHandleRePost={onHandleRePost}
			nodeRef={heightRef}
		/>
	)
}

export default ExpandedPostObserver;