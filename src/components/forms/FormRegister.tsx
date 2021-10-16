import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import type {
  UseFormRegister,
  UseFormWatch,
  UseFormGetValues,
  FieldErrors,
  UseFormTrigger,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';
import type { User } from '../../types';
import { useAuth } from '../../context/auth.context';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Span } from '../Span/Span';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { grid } from '../../styles/layouts.css';
import { cx } from '../../utils/classname.utils';

// TODO
// redesign input components
// improve types

type Fields = {
  confirmPassword: string;
} & User;

type StepProps = {
  setStep: Dispatch<SetStateAction<number>>;
  register: UseFormRegister<Fields>;
  watch: UseFormWatch<Fields>;
  getValues: UseFormGetValues<Fields>;
  trigger: UseFormTrigger<Fields>;
  errors: FieldErrors<Fields>;
  reset: UseFormReset<Fields>;
  setValue: UseFormSetValue<Fields>;
};

const Step1 = ({
  setStep,
  register,
  errors,
  watch,
  trigger,
}: Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'watch' | 'trigger'
>) => {
  const password = useRef<string>();
  const email = useRef<string>('');
  const { checkUniqueValue, error } = useAuth();

  password.current = watch('password', '');
  email.current = watch('email', '');

  const handleNextStep = async () => {
    const isValid = await trigger();
    const isUniqueMail = await checkUniqueValue('email', email.current);

    if (isValid && isUniqueMail) return setStep((step) => step + 1);
  };

  return (
    <>
      <Span variant={{ color: 'secondary' }}>{error?.error}</Span>

      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        register={register}
        options={{ required: '❌ Please enter an email address ⤴ ' }}
        errors={errors}
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        label="Password"
        autoComplete="new-password"
        register={register}
        options={{
          required: '❌ Please enter your password ⤴',
          minLength: { value: 8, message: 'At least 8 characters required' },
        }}
        errors={errors}
      />

      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        label="Confirm password"
        autoComplete="new-password"
        register={register}
        options={{
          required: '❌ Please confirm your password ⤴',
          validate: (value) =>
            value === password.current || 'Password does not match',
        }}
        errors={errors}
      />

      {/* Next step btn */}
      <Button type="button" onClick={handleNextStep}>
        Next step
      </Button>
    </>
  );
};

const Step2 = ({
  setStep,
  register,
  errors,
  trigger,
  watch,
}: Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'trigger' | 'watch'
>) => {
  const userName = useRef<string>('');
  userName.current = watch('userName', '');
  const { checkUniqueValue, error } = useAuth();

  const handleNextStep = async () => {
    const isValid = await trigger();
    const isUniqueUserName = await checkUniqueValue(
      'username',
      userName.current
    );

    if (isValid && isUniqueUserName) return setStep((step) => step + 1);
  };

  return (
    <>
      <Span variant={{ color: 'secondary' }}>{error?.error}</Span>

      {/* Username */}
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Username</span>
        <input
          type="text"
          placeholder="Username"
          {...register('userName', { required: 'Username required' })}
        />
        {errors.userName && (
          <Span variant={{ color: 'secondary', size: 'sm' }}>
            {errors.userName?.message}
          </Span>
        )}
      </label>

      {/* Department */}
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Department</span>
        <select
          defaultValue=""
          {...register('department', {
            required: 'Please select your department',
          })}
        >
          <option value="" disabled>
            Select your dpt
          </option>
          {['DIRECTION', 'TECH', 'SOCIAL', 'COM', 'VISITOR'].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {errors.department && (
          <Span variant={{ color: 'secondary' }}>
            {errors.department?.message}
          </Span>
        )}
      </label>

      {/* Buttons */}
      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button type="button" onClick={() => setStep((step) => step - 1)}>
          Prev step
        </Button>
        <Button type="button" onClick={handleNextStep}>
          Next step
        </Button>
      </div>
    </>
  );
};

const Step3 = ({
  setStep,
  errors,
  register,
  trigger,
  setValue,
}: Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'trigger' | 'setValue'
>) => {
  const handleNextStep = async () => {
    const isValid = await trigger();
    isValid && setStep((step) => step + 1);
  };

  const handleSkipStep = () => {
    (['firstName', 'lastName', 'bio'] as const).forEach((e) => setValue(e, ''));
    setStep((step) => step + 1);
  };

  return (
    <>
      {/* First name */}
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Firstname</span>
        <input
          type="text"
          placeholder="First name"
          {...register('firstName', {
            minLength: { value: 2, message: 'Min 2 chars' },
          })}
        />
        {errors.firstName && (
          <Span variant={{ color: 'secondary' }}>
            {errors.firstName?.message}
          </Span>
        )}
      </label>

      {/* Last name */}
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Last name</span>
        <input
          type="text"
          placeholder="Last name"
          {...register('lastName', {
            minLength: { value: 2, message: 'Min 2 chars' },
          })}
        />
        {errors.lastName && (
          <Span variant={{ color: 'secondary' }}>
            {errors.lastName?.message}
          </Span>
        )}
      </label>

      {/* Bio */}
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Bio</span>
        <textarea
          placeholder="Your bio..."
          {...register('bio', {
            minLength: { value: 3, message: 'At least 3 characters' },
            maxLength: { value: 100, message: 'No more than 100 chars pls' },
          })}
        ></textarea>
        {errors?.bio && (
          <Span variant={{ color: 'secondary' }}>{errors?.bio?.message}</Span>
        )}
      </label>

      {/* btns */}
      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button type="button" onClick={() => setStep((step) => step - 1)}>
          Prev step
        </Button>

        <Button type="button" onClick={handleNextStep}>
          Next step
        </Button>

        <Button type="button" onClick={handleSkipStep}>
          Skip this step
        </Button>
      </div>
    </>
  );
};

const Summary = ({
  setStep,
  getValues,
}: Pick<StepProps, 'setStep' | 'getValues'>) => {
  const values = [
    'userName',
    'email',
    'department',
    'firstName',
    'lastName',
    'bio',
  ] as const;

  return (
    <>
      <ul>
        {values.map((val) => (
          <li key={val}>
            {val}: {getValues(val) || 'Not informed ℹ'}
          </li>
        ))}
      </ul>

      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button type="button" onClick={() => setStep((step) => step - 1)}>
          Prev step
        </Button>
        <input type="submit" value="Create user account" />
      </div>
    </>
  );
};

const Success = () => {
  return (
    <>
      <p>
        <span role="img" aria-label="Part popper emoji">
          🎉
        </span>{' '}
        User successfully created
      </p>

      <Anchor to="/">Go to Feed</Anchor>
    </>
  );
};

const variants: Variants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: '100%',
    opacity: 0,
  },
};

export function FormRegister() {
  const { register: registerApi } = useAuth();
  const [step, setStep] = useState<number>(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
    trigger,
    setValue,
  } = useForm<Fields>({ mode: 'onChange' });

  const commonProps = { setStep, register, errors, trigger };

  const STEPS = {
    1: <Step1 {...commonProps} watch={watch} />,
    2: <Step2 {...commonProps} watch={watch} />,
    3: <Step3 {...commonProps} setValue={setValue} />,
    4: <Summary setStep={setStep} getValues={getValues} />,
    5: <Success />,
  };

  const handleOnSubmit = async (data: Fields) => {
    const { confirmPassword: _, ...user } = data;

    // does not work because of routes
    setStep((step) => step + 1);
    await registerApi(user);
  };

  return (
    <>
      <form
        className={cx([
          grid({ template: 'sameArea' }),
          utilities({ overflow: 'hidden' }),
        ])}
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <AnimatePresence>
          <motion.div
            key={step}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={utilities({
              gridArea: 'area',
              display: 'grid',
              gap: 'md',
              paddingBlock: 'sm',
            })}
          >
            {STEPS[step as keyof typeof STEPS]}
          </motion.div>
        </AnimatePresence>
      </form>
      <small className={utilities({ color: 'info' })}>
        {step} of {Object.keys(STEPS).length}
      </small>
    </>
  );
}
