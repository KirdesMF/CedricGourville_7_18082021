import { NextFunction, Response, Request } from 'express';
import ImageKit from 'imagekit';
import { createReadStream, promises } from 'fs';

const imagekit = new ImageKit({
  publicKey: 'public_LACBQ1l5yA/Ko4n7CaM23xA+ikg=',
  privateKey: 'private_FGtYc6CIix1KSlqkT5utseJrS+w=',
  urlEndpoint: 'https://ik.imagekit.io/i3uinwevzvu',
});

export async function uploadFileToImageKit(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.file) {
      req.body.media = null;
      next();
    }

    if (req.file) {
      const file = createReadStream(req.file.path);

      const response = await imagekit.upload({
        file,
        fileName: req.file.filename,
        folder: 'feed',
      });

      if (response) {
        // delete tmp file
        await promises.unlink(req.file.path);
        // set post url img
        req.body.media = response.url;
        next();
      }
    }
  } catch (error) {
    next(error);
  }
}

export async function uploadAvatarToImageKit(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.file) {
      req.body.avatar = null;
      next();
    }

    if (req.file) {
      const file = createReadStream(req.file.path);

      const response = await imagekit.upload({
        file,
        fileName: req.file.filename,
        folder: `avatar`,
      });

      if (response) {
        // delete tmp file
        await promises.unlink(req.file.path);
        // set post url img
        req.body.avatar = response.url;
        next();
      }
    }
  } catch (error) {
    next(error);
  }
}
