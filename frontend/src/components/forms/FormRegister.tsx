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
import type { User } from '../../types';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { BasicInput, CustomInput } from '../Input/Input';
import { Span } from '../Span/Span';
import { grid } from '../../styles/layouts.css';
import { cx } from '../../utils/classname.utils';
import { utilities } from '../../styles/utilities.css';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { CustomSelect } from '../Select/Select';
import { CustomTextArea } from '../TextArea/TextArea';
import { useCheckNotUsed, useCreateUser } from '../../api/user.api';

// TODO
// redesign input components
// improve types
// improve animation

type UserFields = User & { confirmPassword: string };
type UserFieldsKeys = keyof UserFields;

type StepProps = {
  setStep: Dispatch<SetStateAction<number>>;

  register: UseFormRegister<UserFields>;
  watch: UseFormWatch<UserFields>;
  getValues: UseFormGetValues<UserFields>;
  trigger: UseFormTrigger<UserFields>;
  errors: FieldErrors<UserFields>;
  reset: UseFormReset<UserFields>;
  setValue: UseFormSetValue<UserFields>;
};

function Step1(
  props: Pick<
    StepProps,
    'setStep' | 'register' | 'errors' | 'watch' | 'trigger'
  >
) {
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

function Step2(
  props: Pick<
    StepProps,
    'setStep' | 'register' | 'errors' | 'trigger' | 'watch'
  >
) {
  const { setStep, register, errors, trigger, watch } = props;
  const { error, mutate } = useCheckNotUsed();

  const usernameRef = useRef<string>('');
  let username = usernameRef.current;
  username = watch('username', '');

  const handleNextStep = async () => {
    const isValidUserFields = await trigger();
    mutate(
      { username },
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

      {/* Username */}
      <CustomInput
        type="text"
        name="username"
        label="username"
        placeholder="Enter a username"
        register={register}
        errors={errors}
        options={{
          required: '❌ Please enter a username ⤴',
          minLength: { value: 2, message: 'At least 2 characters required' },
        }}
      />

      {/* Department */}
      <CustomSelect
        name="department"
        label="department"
        customPlaceholder="Select your department"
        register={register}
        errors={errors}
        choices={['DIRECTION', 'TECH', 'SOCIAL', 'COM', 'VISITOR']}
        options={{
          required: 'Please select your department',
        }}
      />

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

const OPTIONAL_FIEDLS: UserFieldsKeys[] = ['firstName', 'lastName', 'bio'];

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
    OPTIONAL_FIEDLS.forEach((e) => setValue(e, ''));
    setStep((step) => step + 1);
  };

  return (
    <>
      {/* First name */}
      <CustomInput
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
      <CustomInput
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
      <CustomTextArea
        name="bio"
        label="bio"
        placeholder="Your bio"
        register={register}
        errors={errors}
        options={{
          minLength: { value: 3, message: 'At least 3 characters' },
          maxLength: { value: 100, message: 'No more than 100 chars pls' },
        }}
      />

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

const SUMMARY_USER: UserFieldsKeys[] = [
  'username',
  'email',
  'department',
  'firstName',
  'lastName',
  'bio',
];

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

        <BasicInput
          type="submit"
          value="Create user account"
          label="create user account"
        />
      </div>
    </>
  );
}

// TODO
// fix success step throw error because of routes

/**
 *
 * @link src/routes/ - need fix
 */
function Success() {
  return (
    <>
      <Heading>Welcome</Heading>
      <Paragraph>User successfully created</Paragraph>
      <Anchor to="/feed">Go to Feed</Anchor>
    </>
  );
}

const variants: Variants = {
  initial: { x: '-100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

export function FormRegister() {
  const { mutate } = useCreateUser();
  const [step, setStep] = useState<number>(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
    trigger,
    setValue,
  } = useForm<UserFields>({ mode: 'onChange' });

  const common = { setStep, register, errors, trigger };

  const STEPS = {
    1: <Step1 {...common} watch={watch} />,
    2: <Step2 {...common} watch={watch} />,
    3: <Step3 {...common} setValue={setValue} />,
    4: <Summary setStep={setStep} getValues={getValues} />,
    5: <Success />,
  };

  const currentStep = STEPS[step as keyof typeof STEPS];

  const handleOnSubmit = async (data: UserFields) => {
    const { confirmPassword: _, ...user } = data;
    mutate(user);
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
