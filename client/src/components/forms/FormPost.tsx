import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FILE_TYPES, MAX_FILE_SIZE } from '../../utils/constants';
import { useCreatePost } from '../../api/post.api';
import { socket } from '../../App';
import { utilities } from '../../styles/utilities.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { CustomInput, FileInput, TextArea } from '../Input/Input';
import * as styles from './form.css';

type PostField = {
  title: string;
  content: string;
  media: FileList;
};

export function FormPost() {
  const { mutate } = useCreatePost();
  const [srcPreview, setSrcPreview] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PostField>();

  const handleOnchangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSrcPreview(URL.createObjectURL(e.target.files?.[0]));
  };

  const handleResetFileInput = () => {
    reset({ media: undefined });
    setSrcPreview(null);
  };

  const handleOnSubmit = (data: PostField) => {
    const form = new FormData();

    const values = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v.length !== 0)
    );

    Object.entries(values).forEach(([key, value]) => {
      key === 'media'
        ? form.append(key, value[0])
        : form.append(key, value as string);
    });

    console.log(data);
    mutate(form);
    reset();
    setSrcPreview(null);

    //TODO: send post to socket server
    socket.emit('new-post');
  };

  return (
    <form
      className={utilities({ display: 'grid', gap: 'md' })}
      onSubmit={handleSubmit(handleOnSubmit)}
      encType="multipart/form-data"
    >
      <CustomInput
        register={register}
        errors={errors}
        placeholder="title"
        name="title"
        label="title"
        type="text"
        options={{
          required: 'Please provide a title',
          minLength: {
            value: 2,
            message: 'At least 2 characters required',
          },
        }}
      />
      <TextArea
        rows={1}
        register={register}
        errors={errors}
        placeholder="What's new ?"
        label="content"
        name="content"
        options={{
          required: 'Please provide something to say',
          minLength: {
            value: 2,
            message: 'At least 2 characters required',
          },
        }}
      />

      <div
        className={utilities({
          display: 'flex',
          gap: 'md',
        })}
      >
        <FileInput
          onChange={handleOnchangeFileInput}
          name="media"
          register={register}
          errors={errors}
          label="file pic"
          placeholder="Add a pic"
          options={{
            validate: {
              size: (files) => {
                if (typeof files !== 'object') return true;
                if (files.length === 0) return true;
                return files[0]?.size < MAX_FILE_SIZE || 'Max 2.5MB';
              },
              format: (files) => {
                if (typeof files !== 'object') return true;
                if (files.length === 0) return true;
                return (
                  FILE_TYPES.includes(files[0]?.type) ||
                  'Only PNG, JPEG, SVG, WEBP, GIF'
                );
              },
            },
          }}
        />

        <Button variant={{ primary: true, shadow: true }} type="submit">
          Post
          <Icon name="PaperPlaneIcon" variant={{ size: 'xs' }} />
        </Button>
      </div>

      {srcPreview && (
        <div>
          <img className={styles.preview} src={srcPreview} alt="" />
          <Button
            type="button"
            onClick={handleResetFileInput}
            variant={{ ghost: true }}
          >
            <Icon name="Cross2Icon" variant={{ size: 'xs' }} />
          </Button>
        </div>
      )}
    </form>
  );
}
