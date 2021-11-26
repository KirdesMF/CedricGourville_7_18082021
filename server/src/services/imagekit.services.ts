import { createReadStream, promises } from 'fs';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.IMG_KIT_PUBLIC || 'publickey',
  privateKey: process.env.IMG_KIT_PRIVATE || 'privatekey',
  urlEndpoint: process.env.IMG_KIT_ENDPOINT || 'endpoint',
});

type Avatar = {
  avatar: string;
  avatarId: string;
};

type Feed = {
  media: string;
  mediaId: string;
};

async function upload<T extends 'avatar' | 'feed'>(
  file: Express.Multer.File,
  folder: T
) {
  const stream = createReadStream(file.path);
  const image = await imagekit.upload({
    file: stream,
    fileName: file.filename,
    folder,
  });

  if (image) {
    await promises.unlink(file.path);
  }

  if (folder === 'avatar') {
    return {
      avatar: image.url,
      avatarId: image.fileId,
    } as unknown as Promise<T extends 'avatar' ? Avatar : Feed>;
  }

  return {
    media: image.url,
    mediaId: image.fileId,
  } as unknown as Promise<T extends 'feed' ? Feed : Avatar>;
}

async function remove(path: string) {
  await imagekit.deleteFile(path);
}

export const ImageKitServices = { upload, remove };
