import { createReadStream, promises } from 'fs';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC || 'publickey',
  privateKey: process.env.IMG_KIT_PRIVATE || 'privatekey',
  urlEndpoint: process.env.IMG_KIT_ENDPOINT || 'endpoint',
});

async function upload(file: Express.Multer.File, folder: 'avatar' | 'feed') {
  const stream = createReadStream(file.path);
  const image = await imagekit.upload({
    file: stream,
    fileName: file.filename,
    folder,
  });

  if (image) {
    await promises.unlink(file.path);
  }

  return {
    avatar: image.url,
    avatarId: image.fileId,
  };
}

async function remove(path: string) {
  await imagekit.deleteFile(path);
}

export const ImageKitServices = { upload, remove };
