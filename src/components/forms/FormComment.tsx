import { Comment } from 'p7_types';
import { useForm } from 'react-hook-form';
import { useCreateComment } from '../../api/comment.api';
import { socket } from '../../App';
import { BasicInput, CustomInput } from '../Input/Input';

export function FormComment({ postId }: { postId: string }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{ content: string }>();

  const { mutate } = useCreateComment();

  const handleOnSubmit = (data: Comment) => {
    const values = { ...data, postId };
    mutate(values);
    reset();
    socket.emit('new-comment', postId);
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
