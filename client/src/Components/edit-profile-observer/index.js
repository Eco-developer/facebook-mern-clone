import { useProfile } from '../../hooks/index.js';

const EditProfileObserver = ({children}) => {
	const { isCurrentAuthUser } = useProfile();
	return (
		isCurrentAuthUser ? 
		children
		: null
	)
}

export default EditProfileObserver;