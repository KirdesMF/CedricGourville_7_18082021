import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  useForm,
  UseFormRegister,
  FieldValues,
  UseFormWatch,
  UseFormGetValues,
} from 'react-hook-form';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Span } from '../Span/Span';

// TODO
// check unique email on step 1
// check unique username on step 2
// redesign input components
// improve types

type StepProps = {
  setStep: Dispatch<SetStateAction<number>>;
  register: UseFormRegister<FieldValues>;
  watch?: UseFormWatch<FieldValues>;
  getValues?: UseFormGetValues<FieldValues>;
  errors: {
    [x: string]: any;
  };
};

const STEP1_FIELDS = ['email', 'password', 'confirm-password'] as const;

const Step1 = ({ setStep, register, errors, watch, getValues }: StepProps) => {
  const password = useRef(null);
  password.current = watch && watch('password', '');

  const values = getValues && getValues(STEP1_FIELDS);
  const isEmpty = values?.some((v) => typeof v === 'undefined');
  const hasErrors = Object.keys(errors).length !== 0;

  const handleNextStep = () => {
    if (isEmpty || hasErrors) return;
    setStep((step) => step + 1);
  };

  return (
    <>
      {/** Email */}
      <label className={utilities({ display: 'grid', gap: 'sm' })}>
        <span className={srOnly}>Email</span>
        <input
          type="email"
          placeholder="Email"
          {...register(STEP1_FIELDS[0], {
            required: 'Please enter an email',
          })}
        />
        {errors.email && (
          <Span variant={{ color: 'secondary' }}>{errors?.email?.message}</Span>
        )}
      </label>

      {/* Password */}
      <label className={utilities({ display: 'grid', gap: 'sm' })}>
        <span className={srOnly}>Password</span>
        <input
          type="password"
          placeholder="Password"
          {...register(STEP1_FIELDS[1], {
            required: 'Please enter your password',
            minLength: { value: 8, message: 'At least 8 characters required' },
          })}
        />
        {errors.password && (
          <Span variant={{ color: 'secondary' }}>
            {errors?.password?.message}
          </Span>
        )}
      </label>

      {/* Confirm password */}
      <label className={utilities({ display: 'grid', gap: 'sm' })}>
        <span className={srOnly}>Confirm password</span>
        <input
          type="password"
          placeholder="Confirm password"
          {...register(STEP1_FIELDS[2], {
            required: 'Please confirm your password',
            validate: (value) =>
              value === password.current || 'Password does not match',
          })}
        />
        {errors['confirm-password'] && (
          <Span variant={{ color: 'secondary' }}>
            {errors?.['confirm-password']?.message}
          </Span>
        )}
      </label>

      {/* Next step btn */}
      <Button onClick={handleNextStep}>Next step</Button>
    </>
  );
};

const Step2 = ({ setStep }: StepProps) => {
  return (
    <>
      <label>
        <span className={srOnly}>Firstname</span>
        <input type="text" placeholder="First name" />
      </label>

      <label>
        <span className={srOnly}>Last name</span>
        <input type="text" placeholder="Last name" />
      </label>

      <label>
        <span className={srOnly}>Username</span>
        <input type="text" placeholder="Username" />
      </label>

      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button onClick={() => setStep((step) => step - 1)}>Prev step</Button>
        <Button onClick={() => setStep((step) => step + 1)}>Next step</Button>
      </div>
    </>
  );
};

const Step3 = ({ setStep }: StepProps) => {
  return (
    <>
      <label>
        <span className={srOnly}>Profil picture</span>
        <input type="file" placeholder="Your profil picture" />
      </label>

      <label>
        <span className={srOnly}>Bio</span>
        <textarea name="" id="" placeholder="Your bio..."></textarea>
      </label>

      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button onClick={() => setStep((step) => step - 1)}>Prev step</Button>
        <Button onClick={() => setStep((step) => step + 1)}>
          Skip this step
        </Button>
      </div>
    </>
  );
};

const Step4 = ({ setStep }: StepProps) => {
  return (
    <>
      <ul>
        <li>First name:</li>
        <li>Last name:</li>
        <li>Email:</li>
        <li>Picture:</li>
        <li>Bio:</li>
      </ul>

      <div className={utilities({ display: 'flex', gap: 'sm' })}>
        <Button onClick={() => setStep((step) => step - 1)}>Prev step</Button>
        <input type="submit" value="Create user account" />
      </div>
    </>
  );
};

const Step5 = () => {
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
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

  const STEPS = {
    1: (
      <Step1
        watch={watch}
        setStep={setStep}
        register={register}
        errors={errors}
        getValues={getValues}
      />
    ),
    2: <Step2 setStep={setStep} register={register} errors={errors} />,
    3: <Step3 setStep={setStep} register={register} errors={errors} />,
    4: <Step4 setStep={setStep} register={register} errors={errors} />,
    5: <Step5 />,
  };

  const handleOnSubmit = () => {
    console.log(errors);
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
    </form>
  );
}
