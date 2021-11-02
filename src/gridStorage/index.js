import GridStorage from 'multer-gridfs-storage';

const gridStorageConfig = (req, file) => {
	return new Promise((resolve, reject) => {
		const filename = `image-${file.originalname}`
		const fileInfo = {
			filename,
			bucketName: 'images',
		}
		resolve(fileInfo)
	})
}

const storage = new GridStorage({
	url: process.env.MONGO_URI, 
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	file: gridStorageConfig
}) 

export default storage;