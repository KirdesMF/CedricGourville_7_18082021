// import { User } from 'p7_types';
import { Department } from 'p7_types';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from '../../api/user.api';
import { utilities } from '../../styles/utilities.css';
import { Button } from '../Button/Button';
import { CustomInput } from '../Input/Input';
import { CustomSelect } from '../Select/Select';

type ProfileField = {
  firstName: string;
  lastName: string;
  bio: string;
  avatar?: FileList;
  username: string;
  password: string;
  department: string;
};

const DEPARTMENT: Department[] = [
  'COM',
  'DIRECTION',
  'SOCIAL',
  'TECH',
  'VISITOR',
];

export function FormProfile() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProfileField>();

  const { mutate } = useUpdateUser();

  const handleOnSubmit = (data: ProfileField) => {
    const form = new FormData();

    const values = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v.length !== 0)
    );

    Object.entries(values).forEach(([key, value]) => {
      key === 'avatar'
        ? form.append(key, value[0])
        : form.append(key, value as string);
    });

    mutate(form);
    reset();
  };

  return (
    <form
      encType="multipart/form-data"
      className={utilities({ display: 'grid', gap: 'md' })}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <CustomInput
        register={register}
        errors={errors}
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
      />

      <CustomInput
        register={register}
        errors={errors}
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
      />

      <CustomInput
        register={register}
        errors={errors}
        type="text"
        name="bio"
        label="Bio"
        placeholder="Bio"
      />
      <CustomInput
        type="file"
        name="avatar"
        register={register}
        errors={errors}
        label="avatar pic"
        placeholder="Add a pic profile"
      />

      <CustomSelect
        name="department"
        choices={DEPARTMENT}
        register={register}
        errors={errors}
        customPlaceholder="Select your department"
        label="department"
      />

      <Button variant={{ primary: true }} type="submit">
        Update your profil
      </Button>
    </form>
  );
}
