import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  useForm,
  UseFormRegister,
  UseFormWatch,
  UseFormGetValues,
  FieldErrors,
  UseFormTrigger,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import { useAuth } from '../../context/auth.context';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { User } from '../../types';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Span } from '../Span/Span';

// TODO
// check unique email on step 1
// check unique username on step 2
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
  password.current = watch('password', '');

  const handleNextStep = async () => {
    const isValid = await trigger();
    isValid && setStep((step) => step + 1);
  };

  return (
    <>
      <Input
        type="email"
        label="Email"
        name="email"
        placeholder="Email"
        register={register}
        options={{ required: 'Please enter an email address' }}
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
          required: 'Please enter your password',
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
          required: 'Please confirm your password',
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
}: Pick<StepProps, 'setStep' | 'register' | 'errors' | 'trigger'>) => {
  const handleNextStep = async () => {
    const isValid = await trigger();
    isValid && setStep((step) => step + 1);
  };

  return (
    <>
      <label className={utilities({ display: 'grid', gap: 'xs' })}>
        <span className={srOnly}>Username</span>
        <input
          type="text"
          placeholder="Username"
          {...register('userName', { required: 'Username required' })}
        />
        {errors.userName && (
          <Span variant={{ color: 'secondary' }}>
            {errors.userName?.message}
          </Span>
        )}
      </label>

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
          <option value="DIRECTION">Direction</option>
          <option value="TECH">Technique</option>
          <option value="COM">Community</option>
          <option value="SOCIAL">Social</option>
          <option value="VISITOR">Visitor</option>
        </select>

        {errors.department && (
          <Span variant={{ color: 'secondary' }}>
            {errors.department?.message}
          </Span>
        )}
      </label>

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
  return (
    <>
      <ul>
        <li>Username: {getValues('userName')}</li>
        <li>Email: {getValues('email')}</li>
        <li>Service: {getValues('department')}</li>
        <li>First name: {getValues('firstName')}</li>
        <li>Last name: {getValues('lastName')}</li>
        <li>Bio: {getValues('bio')}</li>
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

export function FormRegister() {
  const { register: registerApi, error } = useAuth();
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
    2: <Step2 {...commonProps} />,
    3: <Step3 {...commonProps} setValue={setValue} />,
    4: <Summary setStep={setStep} getValues={getValues} />,
    5: <Success />,
  };

  const handleOnSubmit = (data: Fields) => {
    const { confirmPassword: _, ...user } = data;
    registerApi(user);

    if (error) console.log(error);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div
        className={utilities({
          display: 'grid',
          gap: 'md',
          paddingBlock: 'sm',
        })}
      >
        {STEPS[step as keyof typeof STEPS]}
      </div>
      <small className={utilities({ color: 'info' })}>
        {step} of {Object.keys(STEPS).length}
      </small>
    </form>
  );
}
