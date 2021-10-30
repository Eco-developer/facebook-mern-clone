import multer from 'multer';
import storage from '../gridStorage/index.js';

const upload = multer({storage});

export default upload;