import multer from 'multer';
import { ErrorHandler } from '../utils/error.utils';
import { convertMegaBytesToBytes } from '../utils/utils';

const EXTENSION = {
  media: /.(jpg|png|jpeg|svg|gif|avif|webp)$/gi,
  avatar: /.(jpg|png|jpeg|svg|avif|webp)$/gi,
};

const MAX_SIZE_MEDIA = convertMegaBytesToBytes(2.5);
const MAX_SIZE_AVATAR = convertMegaBytesToBytes(2);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './media');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = file.mimetype.split('/')[1];
    const fileName = `${name}-${Date.now()}.${extension}`;

    cb(null, fileName);
  },
});

export const multerMedia = multer({
  storage,
  limits: { fileSize: MAX_SIZE_MEDIA },
  fileFilter: (req, file, cb) => {
    if (!EXTENSION.media.test(file.originalname)) {
      return cb(new ErrorHandler(400, '❌ Only jpg,jpeg,png are allowed'));
    }
    return cb(null, true);
  },
}).single('media');

export const multerAvatar = multer({
  storage,
  limits: { fileSize: MAX_SIZE_AVATAR },
  fileFilter: (req, file, cb) => {
    if (!EXTENSION.avatar.test(file.originalname)) {
      return cb(new ErrorHandler(400, '❌ Only jpg,jpeg,png are allowed'));
    }
    return cb(null, true);
  },
}).single('avatar');
