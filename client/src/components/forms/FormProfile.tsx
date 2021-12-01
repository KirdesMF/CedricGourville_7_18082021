// import { User } from 'p7_types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from '../../api/user.api';
import { utilities } from '../../styles/utilities.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { CustomInput, FileInput, TextArea } from '../Input/Input';
import * as styles from './form.css';

type ProfileField = {
  firstName: string;
  lastName: string;
  bio: string;
  avatar?: FileList;
  username: string;
  password: string;
};

type ProfileForm = {
  setIsEditing: (isEditing: boolean) => void;
};

export function FormProfile({ setIsEditing }: ProfileForm) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProfileField>();

  const [srcPreview, setSrcPreview] = useState<string | null>(null);

  const handleOnchangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSrcPreview(URL.createObjectURL(e.target.files?.[0]));
  };

  const handleResetFileInput = () => {
    reset({ avatar: undefined });
    setSrcPreview(null);
  };
  const { mutate, isSuccess } = useUpdateUser();

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
  };

  useEffect(() => {
    if (isSuccess) {
      setIsEditing(false);
      reset();
    }
  }, [isSuccess]);

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
        name="username"
        label="Username"
        placeholder="username"
      />

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

      <TextArea
        register={register}
        errors={errors}
        name="bio"
        label="Bio"
        placeholder="Bio"
      />

      <div
        className={utilities({
          display: 'flex',
          gap: 'md',
        })}
      >
        <FileInput
          onChange={handleOnchangeFileInput}
          name="avatar"
          register={register}
          errors={errors}
          label="avatar pic"
          placeholder="Add a pic profile"
        />

        <Button variant={{ primary: true, shadow: true }} type="submit">
          Update your profil
        </Button>
      </div>

      {srcPreview && (
        <div>
          <img className={styles.previewProfile} src={srcPreview} alt="" />
          <Button
            type="button"
            onClick={handleResetFileInput}
            variant={{ ghost: true }}
          >
            <Icon name="Cross2Icon" variant={{ size: 'xs' }} />
          </Button>
        </div>
      )}
    </form>
  );
}
