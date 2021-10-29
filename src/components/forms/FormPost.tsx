import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../api/post.api';
import { utilities } from '../../styles/utilities.css';
import { BasicInput, CustomInput } from '../Input/Input';
// import { IKUpload } from 'imagekitio-react';

type PostField = {
  title: string;
  content: string;
  media: FileList;
};

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

    Object.entries(data).forEach(([key, value]) => {
      key === 'media'
        ? form.append(key, value[0])
        : form.append(key, value as string);
    });

    mutate(form);
    reset();
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
      <CustomInput
        type="file"
        name="media"
        register={register}
        errors={errors}
        label="file pic"
        placeholder="Add a pic"
      />

      <BasicInput value="Send" type="submit" />
    </form>
  );
}
