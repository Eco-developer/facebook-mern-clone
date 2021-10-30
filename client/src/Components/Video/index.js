const Video = ({videoId}) => (
	<div className='p-relative w-100 h-300'>
		<div className='p-absolute video-container'>
			<iframe 
				height="300" 
				className='w-100'
				src={`https://www.youtube.com/embed/${videoId}`}
				title="YouTube video player" 
				frameBorder="0" 
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen
				>
			</iframe>
		</div>
	</div>	
)

export default Video;