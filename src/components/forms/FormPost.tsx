import { useForm } from 'react-hook-form';
import { useCreatePost } from '../../api/post.api';
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

    for (const key in data) {
      if (key === 'media') {
        form.append(key, data[key][0]);
      }
      form.append(key, data[key as keyof Omit<PostField, 'media'>]);
    }

    mutate(form);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} encType="multipart/form-data">
      <CustomInput
        register={register}
        errors={errors}
        placeholder="title"
        name="title"
        label="title"
        type="text"
      />
      <CustomInput
        register={register}
        errors={errors}
        type="text"
        placeholder="What's new ?"
        label="title"
        name="content"
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
