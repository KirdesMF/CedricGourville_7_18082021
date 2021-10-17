import { useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
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
import { AnimatePresence, motion, Variants } from 'framer-motion';
import type { User } from '../../types';
import { useAuth } from '../../context/auth.context';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { CustomInput } from '../Input/Input';
import { Span } from '../Span/Span';
import { grid } from '../../styles/layouts.css';
import { cx } from '../../utils/classname.utils';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';

// TODO
// redesign input components
// improve types
// improve animation

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

function Step1(
  props: Pick<
    StepProps,
    'setStep' | 'register' | 'errors' | 'watch' | 'trigger'
  >
) {
  const { setStep, register, errors, watch, trigger } = props;

  const { checkUniqueValue, error } = useAuth();
  const password = useRef<string>();
  const email = useRef<string>('');

  password.current = watch('password', '');
  email.current = watch('email', '');

  const handleNextStep = async () => {
    const isValidFields = await trigger();
    const isUniqueMail = await checkUniqueValue('email', email.current);

    if (isValidFields && isUniqueMail) return setStep((step) => step + 1);
  };

  return (
    <>
      <Span variant={{ color: 'secondary' }}>{error?.error}</Span>

      <CustomInput<Fields>
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

      <CustomInput<Fields>
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

      <CustomInput<Fields>
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        label="Confirm password"
        autoComplete="new-password"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please confirm your password ⤴',
          validate: (value) =>
            value === password.current || 'Password does not match',
        }}
      />

      <Button type="button" onClick={handleNextStep}>
        Next step
      </Button>
    </>
  );
}

const DEPARTMENT = ['DIRECTION', 'TECH', 'SOCIAL', 'COM', 'VISITOR'];

function Step2(
  props: Pick<
    StepProps,
    'setStep' | 'register' | 'errors' | 'trigger' | 'watch'
  >
) {
  const { setStep, register, errors, trigger, watch } = props;

  const { checkUniqueValue, error } = useAuth();
  const userName = useRef<string>('');

  userName.current = watch('userName', '');

  const handleNextStep = async () => {
    const isValidFields = await trigger();
    const isUniqueUserName = await checkUniqueValue(
      'username',
      userName.current
    );

    if (isValidFields && isUniqueUserName) return setStep((step) => step + 1);
  };

  return (
    <>
      <Span variant={{ color: 'secondary' }}>{error?.error}</Span>

      {/* Username */}
      <CustomInput<Fields>
        type="text"
        name="userName"
        label="username"
        placeholder="Enter a username"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter your a username ⤴',
          minLength: { value: 2, message: 'At least 2 characters required' },
        }}
      />

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

          {DEPARTMENT.map((dpt) => (
            <option key={dpt} value={dpt}>
              {dpt}
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
}

function Step3(
  props: Pick<
    StepProps,
    'setStep' | 'register' | 'errors' | 'trigger' | 'setValue'
  >
) {
  const { setStep, errors, register, trigger, setValue } = props;

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
      <CustomInput<Fields>
        type="text"
        name="firstName"
        label="FirstName"
        placeholder="Enter a your first name"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter your first name ⤴',
          minLength: { value: 2, message: 'At least 2 characters required' },
        }}
      />

      {/* Last name */}
      <CustomInput<Fields>
        type="text"
        name="lastName"
        label="lastname"
        placeholder="Enter a your last name"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter your last name ⤴',
          minLength: { value: 2, message: 'At least 2 characters required' },
        }}
      />

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
}

const SUMMARY_USER = [
  'userName',
  'email',
  'department',
  'firstName',
  'lastName',
  'bio',
] as const;

function Summary(props: Pick<StepProps, 'setStep' | 'getValues'>) {
  const { setStep, getValues } = props;

  return (
    <>
      <ul>
        {SUMMARY_USER.map((val) => (
          <li key={val}>
            <Paragraph>
              {val}: {getValues(val) || 'Not informed ℹ'}
            </Paragraph>
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
}

function Success() {
  return (
    <>
      <Heading>Welcome</Heading>
      <Paragraph>User successfully created</Paragraph>
      <Anchor to="/">Go to Feed</Anchor>
    </>
  );
}

const variants: Variants = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
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

  const common = { setStep, register, errors, trigger };

  const STEPS = {
    1: <Step1 {...common} watch={watch} />,
    2: <Step2 {...common} watch={watch} />,
    3: <Step3 {...common} setValue={setValue} />,
    4: <Summary setStep={setStep} getValues={getValues} />,
    5: <Success />,
  };

  const currentStep = STEPS[step as keyof typeof STEPS];

  const handleOnSubmit = async (data: Fields) => {
    const { confirmPassword: _, ...user } = data;
    await registerApi(user);
    setStep((step) => step + 1);
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
            {currentStep}
          </motion.div>
        </AnimatePresence>
      </form>
      <small className={utilities({ color: 'info' })}>
        {step} of {Object.keys(STEPS).length}
      </small>
    </>
  );
}
