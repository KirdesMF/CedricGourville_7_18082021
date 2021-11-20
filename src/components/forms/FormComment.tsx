import { Comment } from 'p7_types';
import { useForm } from 'react-hook-form';
import { useCommentPost } from '../../api/post.api';
import { socket } from '../../App';
import { Button } from '../Button/Button';
import { CustomInput } from '../Input/Input';

export function FormComment({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{ content: string }>();

  const { mutate } = useCommentPost();

  const handleOnSubmit = (data: Comment) => {
    const values = { ...data, postId, userId };
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
      <Button variant={{ primary: true }} type="submit">
        Comment
      </Button>
    </form>
  );
}
