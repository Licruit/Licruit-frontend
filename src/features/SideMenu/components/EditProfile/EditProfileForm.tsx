import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import useUserType from '@/hooks/usertype/useUserType';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { formatPhoneNumber, formatPhoneNumberToNumber } from '@/utils/format';
import { REGEXP } from '@/constants/form/form';
import { INPUT } from '../../constants/input';
import useProfileMutation from '../../hooks/useProfileMutation';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import { GetProfile } from '../../model/profile.model';
import { CATEGORY } from '../../constants/category';

interface Props {
  userProfile: GetProfile;
  image: string;
}

function EditProfileForm({ userProfile, image }: Props) {
  const currentCategoryId = CATEGORY.findIndex(
    (item) => item === userProfile.sectorName
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(
    currentCategoryId + 1
  );
  const [isImageChange, setIsImageChange] = useState(false);
  const [prevImage, setPrevImage] = useState(image);

  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { mutate: editProfile } = useProfileMutation();
  const { checkIsCompany } = useUserType();

  const methods = useForm<GetProfile>({
    mode: 'onChange',
    defaultValues: {
      businessName: userProfile?.businessName,
      contact: formatPhoneNumber(userProfile?.contact),
      address: userProfile?.address,
      homepage: userProfile?.homepage,
      introduce: userProfile?.introduce,
    },
  });

  const {
    register,
    formState: { isValid, isDirty },
    watch,
    handleSubmit,
  } = methods;

  useEffect(() => {
    if (prevImage !== image) {
      setIsImageChange(true);
      setPrevImage(image);
    }
  }, [image, prevImage]);

  const introduceValue = watch('introduce') || '';
  const isCompany = checkIsCompany();

  const getCategory = (value: number) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form
          aria-label='edit-profile-form'
          onSubmit={handleSubmit((data) => {
            editProfile({
              profile: {
                ...data,
                contact: formatPhoneNumberToNumber(data.contact),
                sectorId: selectedCategory,
                image,
              },
            });
          })}
        >
          <ProfileInput
            {...INPUT.shop}
            maxLength={25}
            {...register('businessName', {
              required: true,
              maxLength: 25,
            })}
            value={watch('businessName')}
          />
          {isCompany && (
            <>
              <IntroduceWrapper>
                <Label {...INPUT.introduce} />
                <Introduce
                  placeholder='내용을 입력해주세요'
                  maxLength={400}
                  {...register('introduce', { maxLength: 400 })}
                />
                <TypeNumber>{introduceValue.length}/400</TypeNumber>
              </IntroduceWrapper>
              <ProfileInput {...INPUT.url} {...register('homepage')} />
            </>
          )}
          <ProfileInput
            {...INPUT.address}
            {...register('address', { required: true })}
          />
          <ProfileInput
            {...INPUT.contact}
            {...register('contact', {
              required: true,
              pattern: REGEXP.contact,
            })}
          />
          {!isCompany && (
            <CategoryButtons
              categories={CATEGORY}
              value={userProfile?.sectorName || ''}
              onSetCategory={getCategory}
            />
          )}

          <Button
            $style='solid'
            $theme='primary'
            $size='md'
            $width='full'
            disabled={!isValid || (!isDirty && !isImageChange)}
            type='submit'
          >
            적용하기
          </Button>
        </Form>
      </FormProvider>
      <SignOut
        onClick={() =>
          setContent('signout', {
            id: Number(userProfile.companyNumber),
            user: userProfile.businessName,
          })
        }
      >
        회원탈퇴
      </SignOut>
    </>
  );
}

const SignOut = styled.p`
  cursor: pointer;

  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.typo.body.medium[12]};
  color: ${({ theme }) => theme.color.neutral[400]};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;

const IntroduceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Introduce = styled.textarea`
  resize: none;

  width: 100%;
  height: 200px;
  padding: 17px 0 0 18px;

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const TypeNumber = styled.div`
  position: absolute;
  right: 18px;
  bottom: 17px;
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;
export default EditProfileForm;
