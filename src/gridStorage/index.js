import GridStorage from 'multer-gridfs-storage';
import path from 'path';

const gridStorageConfig = (req, file) => {
	return new Promise((resolve, reject) => {
		const filename = `image-${new Date()}${path.extname(file.originalname)}`
		const fileInfo = {
			filename,
			bucketName: 'images',
		}
		resolve(fileInfo)
	})
}

const storage = new GridStorage({url: process.env.MONGO_URI, file: gridStorageConfig}) 

export default storage;