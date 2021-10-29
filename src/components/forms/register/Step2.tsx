import { Department } from 'p7_types';
import { StepProps } from './types';

import { useRef } from 'react';
import { useCheckNotUsed } from '../../../api/user.api';
import { utilities } from '../../../styles/utilities.css';
import { Button } from '../../Button/Button';
import { CustomInput } from '../../Input/Input';
import { CustomSelect } from '../../Select/Select';
import { Span } from '../../Span/Span';

type Step2Props = Pick<
  StepProps,
  'setStep' | 'register' | 'errors' | 'trigger' | 'watch'
>;

const CHOICES: Department[] = ['DIRECTION', 'TECH', 'SOCIAL', 'COM', 'VISITOR'];

export function Step2(props: Step2Props) {
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
        choices={CHOICES}
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
