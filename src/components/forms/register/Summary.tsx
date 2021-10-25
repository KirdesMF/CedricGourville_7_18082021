import { utilities } from '../../../styles/utilities.css';
import { Button } from '../../Button/Button';
import { BasicInput } from '../../Input/Input';
import { Paragraph } from '../../Paragraph/Paragraph';
import { StepProps, UserFieldsKeys } from './types';

const SUMMARY_USER: UserFieldsKeys[] = [
  'username',
  'email',
  'department',
  'firstName',
  'lastName',
  'bio',
];

export function Summary(props: Pick<StepProps, 'setStep' | 'getValues'>) {
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
