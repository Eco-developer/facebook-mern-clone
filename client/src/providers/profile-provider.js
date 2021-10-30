import ProfileContext from '../context/profile-context.js';

const ProfileProvider = ({value, children}) => (
	<ProfileContext.Provider value={value}>
		{children}
	</ProfileContext.Provider>
)

export default ProfileProvider;