import { useForm } from 'react-hook-form';
import { useLogUser } from '../../api/user.api';
import { CustomInput } from '../../components/Input/Input';
import { utilities } from '../../styles/utilities.css';
import { cx } from '../../utils/classname.utils';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Span } from '../Span/Span';

type LoginFields = {
  log: string;
  password: string;
};

export function FormLogIn() {
  const { mutate, error } = useLogUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({ mode: 'onChange' });

  const handleOnSubmit = (data: LoginFields) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className={cx([
        utilities({
          display: 'grid',
          gap: 'md',
          maxWidth: 'lg',
          paddingBlock: 'sm',
        }),
      ])}
    >
      {error && <Span>{error.message}</Span>}

      <CustomInput
        id="log"
        type="text"
        name="log"
        placeholder="Email or username"
        label="Email"
        errors={errors}
        register={register}
        options={{
          required: 'Please enter an email address or a username ⤴ ',
        }}
      />

      <CustomInput
        name="password"
        id="password"
        type="password"
        placeholder="Password"
        autoComplete="username"
        label="Password"
        register={register}
        errors={errors}
        options={{
          required: 'Please enter your corresponding password ⤴ ',
        }}
      />

      <Button
        type="submit"
        variant={{
          primary: true,
          fontSize: 'xs',
          weight: 'thin',
          shadow: true,
        }}
      >
        Log in
        <Icon name="Pencil1Icon" />
      </Button>
    </form>
  );
}
