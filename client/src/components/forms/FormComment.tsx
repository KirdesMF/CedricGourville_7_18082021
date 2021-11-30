import type { Comment } from '@server/types';
import { useForm } from 'react-hook-form';
import { useCommentPost } from '../../api/post.api';
import { socket } from '../../App';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { TextArea } from '../Input/Input';

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

  const handleOnSubmit = (data: Pick<Comment, 'content'>) => {
    mutate({
      content: data.content,
      postId,
      userId,
    });
    reset();
    socket.emit('new-comment', postId);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.comment}>
      <TextArea
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
