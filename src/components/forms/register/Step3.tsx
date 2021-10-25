import { utilities } from '../../../styles/utilities.css';
import { Button } from '../../Button/Button';
import { CustomInput } from '../../Input/Input';
import { CustomTextArea } from '../../TextArea/TextArea';
import { StepProps, UserFieldsKeys } from './types';

const OPTIONAL_FIEDLS: UserFieldsKeys[] = ['firstName', 'lastName', 'bio'];

type Step3Props = Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'trigger' | 'setValue'
>;

export function Step3(props: Step3Props) {
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
