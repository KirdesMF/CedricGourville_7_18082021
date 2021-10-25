import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Anchor } from '../../Anchor/Anchor';
import { cx } from '../../../utils/classname.utils';
import { Heading } from '../../Heading/Heading';
import { Paragraph } from '../../Paragraph/Paragraph';
import { useCreateUser } from '../../../api/user.api';

import { UserFields } from './types';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Summary } from './Summary';
import { grid } from '../../../styles/layouts.css';
import { utilities } from '../../../styles/utilities.css';

// TODO
// redesign input components
// improve types
// improve animation

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
