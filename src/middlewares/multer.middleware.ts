import multer from 'multer';

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

export const upload = multer({ storage }).single('picture');
