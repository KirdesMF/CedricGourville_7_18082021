import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../api/post.api';
import { socket } from '../../App';
import { utilities } from '../../styles/utilities.css';
import { convertMegaBytesToBytes } from '../../utils/utils';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { BasicInput, CustomInput, FileInput } from '../Input/Input';

type PostField = {
  title: string;
  content: string;
  media: FileList;
};

const MAX_FILE_SIZE = convertMegaBytesToBytes(2.5);

export function FormPost() {
  const { mutate } = useCreatePost();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PostField>();

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
      <CustomInput
        register={register}
        errors={errors}
        type="text"
        placeholder="What's new ?"
        label="title"
        name="content"
        options={{ required: 'Please provide something to say' }}
      />
      <FileInput
        name="media"
        register={register}
        errors={errors}
        label="file pic"
        placeholder="Add a pic"
        options={{
          required: false,
          // validate: {
          //   size: (value) => {
          //     if (typeof value === 'object') {
          //       return (
          //         (value[0] && value[0]?.size < MAX_FILE_SIZE) ||
          //         'Max file size 2.5 Mo pls'
          //       );
          //     }
          //     return true;
          //   },
          //   format: (value) => {
          //     if (typeof value === 'object') {
          //       return (
          //         value[0]?.name.match(/.(jpg|png)$/gi) ||
          //         'only jpg and png allowed'
          //       );
          //     }
          //     return true;
          //   },
          // },
        }}
      />

      <Button
        variant={{ primary: true, weight: 'thin', shadow: true }}
        type="submit"
      >
        Post
        <Icon name="PaperPlaneIcon" />
      </Button>
    </form>
  );
}
