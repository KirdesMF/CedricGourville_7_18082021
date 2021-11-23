import { Comment } from 'p7_types';
import { useForm } from 'react-hook-form';
import { useCommentPost } from '../../api/post.api';
import { socket } from '../../App';
import { utilities } from '../../styles/utilities.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { CustomInput, TextArea } from '../Input/Input';

import * as styles from './form.css';

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
    <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.comment}>
      <TextArea
        rows={1}
        autoFocus
        register={register}
        errors={errors}
        name="content"
        placeholder="your comment"
        label="content"
      />
      <Button variant={{ primary: true }} type="submit">
        <Icon name="PaperPlaneIcon" />
      </Button>
    </form>
  );
}
