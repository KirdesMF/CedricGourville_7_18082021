import { User } from '@server/types';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUser } from '../../api/user.api';

import { CustomInput } from '../Input/Input';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Span } from '../Span/Span';
import { utilities } from '../../styles/utilities.css';
import { PASSWORD_REGEX, REGEX_EMAIL } from '../../utils/constants';

type UserFields = User & { confirmPassword: string };

export function FormRegister() {
  const { mutate, error } = useCreateUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<UserFields>({ mode: 'onChange' });

  const passwordRef = useRef<string>();
  let password = passwordRef.current;
  password = watch('password', '');

  const handleOnSubmit = async (data: UserFields) => {
    const { confirmPassword: _, ...user } = data;
    mutate(user);
  };

  return (
    <form
      className={utilities({ display: 'grid', gap: 'md' })}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      {error && <Span variant={{ color: 'secondary' }}>{error.message}</Span>}

      <CustomInput
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        register={register}
        errors={errors}
        options={{
          required: 'Please enter an email address ⤴ ',
          pattern: {
            value: REGEX_EMAIL,
            message: 'Provide a groupomania valid email',
          },
        }}
      />

      <CustomInput
        type="text"
        name="username"
        placeholder="Username"
        label="username"
        register={register}
        errors={errors}
        options={{
          required: 'Please enter a username ⤴',
          minLength: {
            value: 2,
            message: 'At least 2 characters required',
          },
        }}
      />

      <CustomInput
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        autoComplete="new-password"
        register={register}
        errors={errors}
        options={{
          required: 'Please enter an email address ⤴ ',
          pattern: {
            value: PASSWORD_REGEX,
            message:
              'Password must contains 8 chars, upper and lower case, at least one number and one special char',
          },
        }}
      />

      <CustomInput
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        label="Confirm password"
        autoComplete="new-password"
        register={register}
        errors={errors}
        options={{
          required: 'Please confirm your password ⤴',
          validate: (value) => value === password || 'Password does not match',
        }}
      />

      <Button
        variant={{
          primary: true,
          shadow: true,
        }}
        type="submit"
      >
        Create your account
        <Icon name="ChevronRightIcon" />
      </Button>
    </form>
  );
}
