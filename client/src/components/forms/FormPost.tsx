import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCreatePost } from '../../api/post.api';
import { socket } from '../../App';
import { utilities } from '../../styles/utilities.css';
import { convertMegaBytesToBytes } from '../../utils/utils';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { CustomInput, FileInput, TextArea } from '../Input/Input';
import * as styles from './form.css';

type PostField = {
  title: string;
  content: string;
  media: FileList;
};

const MAX_FILE_SIZE = convertMegaBytesToBytes(2.5);

export function FormPost() {
  const { mutate, isError } = useCreatePost();
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

    mutate(form);
    reset();
    socket.emit('new-post');
  };

  if (isError) toast('Error while creating post');

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
        options={{ required: 'Please provide a title' }}
      />
      <TextArea
        rows={1}
        register={register}
        errors={errors}
        placeholder="What's new ?"
        label="content"
        name="content"
        options={{ required: 'Please provide something to say' }}
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
