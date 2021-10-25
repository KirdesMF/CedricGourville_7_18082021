import { useRef } from 'react';
import { useCheckNotUsed } from '../../../api/user.api';
import { Button } from '../../Button/Button';
import { CustomInput } from '../../Input/Input';
import { Span } from '../../Span/Span';
import { StepProps } from './types';

type TStep1Props = Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'watch' | 'trigger'
>;

export function Step1(props: TStep1Props) {
  const { setStep, register, errors, watch, trigger } = props;
  const { error, mutate } = useCheckNotUsed();

  const passwordRef = useRef<string>();
  const emailRef = useRef<string>('');
  let password = passwordRef.current;
  let email = emailRef.current;

  password = watch('password', '');
  email = watch('email', '');

  const handleNextStep = async () => {
    const isValidUserFields = await trigger();
    mutate(
      { email },
      {
        onSuccess: () => {
          isValidUserFields && setStep((step) => step + 1);
        },
      }
    );
  };

  return (
    <>
      {error && <Span variant={{ color: 'secondary' }}>{error.message}</Span>}

      <CustomInput
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter an email address ⤴ ',
          pattern: { value: /.+@.+/, message: 'Provide a valid email' },
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
          required: '❌ Please enter your password ⤴',
          minLength: { value: 8, message: 'At least 8 characters required' },
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
          required: '❌ Please confirm your password ⤴',
          validate: (value) => value === password || 'Password does not match',
        }}
      />

      <Button type="button" onClick={handleNextStep}>
        Next step
      </Button>
    </>
  );
}
