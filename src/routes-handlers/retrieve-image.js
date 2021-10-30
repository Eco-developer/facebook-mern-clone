import { gfsBucket } from '../db/index.js';
import { Router } from 'express';

const router = Router();

const retrieveImageHandler = async (req, res) => {
	const { query : { name } } = req;
	try {
		const file = await gfsBucket.files.findOne({filename: name})
		if (!file) {
			res.status(404).send('not found');
		} else {
			const readStream = gfsBucket.createReadStream(file.filename)
			readStream.pipe(res);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

router.get('/images/single', retrieveImageHandler);

export default router;
