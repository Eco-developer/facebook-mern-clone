import { useContext } from 'react';
import ProfileContext from '../context/profile-context.js';

const useProfile = () => (
	useContext(ProfileContext)
)

export default useProfile;