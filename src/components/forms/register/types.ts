import { User } from 'p7_types';
import { Dispatch, SetStateAction } from 'react';
import type {
  UseFormRegister,
  UseFormWatch,
  UseFormGetValues,
  FieldErrors,
  UseFormTrigger,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';

export type UserFields = User & { confirmPassword: string };
export type UserFieldsKeys = keyof UserFields;

export type StepProps = {
  setStep: Dispatch<SetStateAction<number>>;
  register: UseFormRegister<UserFields>;
  watch: UseFormWatch<UserFields>;
  getValues: UseFormGetValues<UserFields>;
  trigger: UseFormTrigger<UserFields>;
  errors: FieldErrors<UserFields>;
  reset: UseFormReset<UserFields>;
  setValue: UseFormSetValue<UserFields>;
};
