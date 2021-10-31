import { Comment } from 'p7_types';
import { useForm } from 'react-hook-form';
import { useCreateComment } from '../../api/comment.api';
import { BasicInput, CustomInput } from '../Input/Input';

export function FormComment({ postId }: { postId: string }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ content: string }>();

  const { mutate, reset } = useCreateComment();

  const handleOnSubmit = (data: Comment) => {
    const values = { ...data, postId };
    mutate(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <CustomInput
        type="text"
        register={register}
        errors={errors}
        name="content"
        placeholder="content"
        label="content"
      />
      <BasicInput type="submit" value="send" />
    </form>
  );
}
