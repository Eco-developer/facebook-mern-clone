export const PostLoyout = ({extend='', mnres=true,children}) =>(
	<div className={`mt-2 mb-2 p-3 bg-white rounded-10 d-flex flex-column shadow-md ${extend} ${mnres ? 'mnres-3' : ''}`}>
		{children}
	</div>
)

export const ProfilePagesLoyout = ({extend='', children}) =>(
	<div className={`${extend} p-2 maxw-800 flex-grow-1`}>
		{children}
	</div>
)

export const FeedLoyout = ({extend='', children}) => (
	<div className={`${extend} base-loyout row m-0 p-0`}>
		{children}
	</div>
)

export const FeedSubLayout = ({children}) => (
	<div className='feed-people-main overflow-y'>
		<div className='d-flex flex-column justify-content-center height-fit p-3'>
			{children}
		</div>
	</div>
)