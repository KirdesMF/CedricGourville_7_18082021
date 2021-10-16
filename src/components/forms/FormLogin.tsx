import { useForm } from 'react-hook-form';
import { BasicInput, Input } from '../../components/Input/Input';
import { useAuth } from '../../context/auth.context';
import { utilities } from '../../styles/utilities.css';
import { cx } from '../../utils/classname.utils';

type LoginFields = {
  log: string;
  password: string;
};

export function FormLogIn() {
  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({ mode: 'onChange' });

  const handleOnSubmit = async (data: LoginFields) => {
    await login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className={cx([
        utilities({
          display: 'grid',
          gap: 'md',
          maxWidth: '50ch',
          paddingBlock: 'sm',
        }),
      ])}
    >
      {error?.error && (
        <p className={utilities({ color: 'warning', fontSize: 3 })}>
          {error.error}
        </p>
      )}

      <Input
        id="log"
        type="text"
        name="log"
        placeholder="Enter your email or username"
        label="Email"
        register={register}
        options={{
          required: '❌ Please enter an email address or a username ⤴ ',
        }}
        errors={errors}
      />

      <Input
        name="password"
        id="password"
        type="password"
        placeholder="Enter your password"
        autoComplete="username"
        label="Password"
        register={register}
        options={{
          required: '❌ Please enter your corresponding password ⤴ ',
        }}
        errors={errors}
      />

      <BasicInput value="Send" type="submit" />
    </form>
  );
}
