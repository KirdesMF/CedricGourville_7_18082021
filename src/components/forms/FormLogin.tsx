import { useForm } from 'react-hook-form';
import { useLogUser } from '../../api/user.api';
import { BasicInput, CustomInput } from '../../components/Input/Input';
import { utilities } from '../../styles/utilities.css';
import { cx } from '../../utils/classname.utils';
import { Button } from '../Button/Button';
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
        placeholder="Enter your email or username"
        label="Email"
        errors={errors}
        register={register}
        options={{
          required: '❌ Please enter an email address or a username ⤴ ',
        }}
      />

      <CustomInput
        name="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        autoComplete="username"
        label="Password"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter your corresponding password ⤴ ',
        }}
      />

      <Button type="submit" variant={{ base: true, uppercase: true }}>
        Log in
      </Button>
    </form>
  );
}
