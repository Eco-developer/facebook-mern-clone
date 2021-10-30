import { Router } from 'express';
import upload from '../multer/index.js';

const router = Router();

const uploadSingleHandler = (req, res) => {
	res.status(201).send(req.file);
}

router.post('/image', upload.single('file'), uploadSingleHandler);

export default router;