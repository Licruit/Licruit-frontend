import Button from '@/components/Button/Button';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import useUserType from '@/hooks/usertype/useUserType';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { INPUT } from '../../constants/input';
import useProfileMutation from '../../hooks/useProfileMutation';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';
import { GetProfile } from '../../model/profile.model';

// TODO 서버 데이터로 변경하기
const category = [
  '한식',
  '일식',
  '양식',
  '중식',
  '이자카야',
  '요리주점',
  '레스토랑',
  '도매업체',
  '기타',
];

interface Props {
  userProfile: GetProfile;
  image: string;
}

function EditProfileForm({ userProfile, image }: Props) {
  const currentCategoryId = category.findIndex(
    (item) => item === userProfile.sectorName
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(
    currentCategoryId + 1
  );
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { mutate: editProfile } = useProfileMutation();
  const { checkIsCompany } = useUserType();

  const methods = useForm<GetProfile>({
    mode: 'onChange',
    defaultValues: {
      businessName: userProfile?.businessName,
      contact: userProfile?.contact,
      address: userProfile?.address,
      homepage: userProfile?.homepage,
      introduce: userProfile?.introduce,
    },
  });
  const {
    register,
    formState: { isValid },
    watch,
    handleSubmit,
  } = methods;

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
            console.log(data);
            editProfile({
              profile: { ...data, sectorId: selectedCategory, image },
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
          <ProfileInput {...INPUT.address} {...register('address')} />
          <ProfileInput
            {...INPUT.contact}
            {...register('contact', { required: true })}
          />
          {!isCompany && (
            <CategoryButtons
              categories={category}
              value={userProfile?.sectorName || ''}
              onSetCategory={getCategory}
            />
          )}

          <Button
            $style='solid'
            $theme='primary'
            $size='md'
            $width='full'
            disabled={!isValid}
            type='submit'
          >
            적용하기
          </Button>
        </Form>
      </FormProvider>
      <SignOut onClick={() => setContent('signout')}>회원탈퇴</SignOut>
    </>
  );
}

const SignOut = styled.p`
  cursor: pointer;

  position: absolute;
  bottom: 20px;
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
