import Button from '@/components/Button/Button';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import { STORAGE_KEY } from '@/constants/storage';
import { INPUT } from '../../constants/input';
import useProfileMutation from '../../hooks/useProfileMutation';
import { GetProfile } from '../../model/profile.model';
import Label from '../common/Label';
import ProfileInput from '../common/ProfileInput';
import CategoryButtons from './CategoryButtons';

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
  // TODO 카테고리 서버 데이터 변경시 같이 수정
  const currentCategoryId = category.findIndex(
    (item) => item === userProfile.sectorName
  );
  const [selectedCategory, setSelectedCategory] = useState<number>(
    currentCategoryId + 1
  );
  const { mutate: editProfile } = useProfileMutation();

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      businessName: userProfile.businessName,
      contact: userProfile.contact,
      address: userProfile.address,
      url: userProfile.homepage,
      introduce: userProfile.introduce,
    },
  });
  const {
    register,
    formState: { isValid },
    watch,
    handleSubmit,
  } = methods;

  const introduceValue = watch('introduce') || '';
  const isCompany = sessionStorage.getItem(STORAGE_KEY.userType) === 'true';

  const getCategory = (value: number) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form
          onSubmit={handleSubmit((data) => {
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
              <ProfileInput {...INPUT.url} {...register('url')} />
              <ProfileInput {...INPUT.address} {...register('address')} />
            </>
          )}
          <ProfileInput
            {...INPUT.contact}
            {...register('contact', { required: true })}
          />
          <CategoryButtons
            categories={category}
            value={userProfile.sectorName}
            onSetCategory={getCategory}
          />

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
    </>
  );
}

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
  width: 100%;
  height: 200px;

  padding: 17px 0 0 18px;

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  resize: none;
`;

const TypeNumber = styled.div`
  position: absolute;
  bottom: 17px;
  right: 18px;

  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;
export default EditProfileForm;
