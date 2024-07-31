import styled, { useTheme } from 'styled-components';
import Check from 'public/assets/icons/check.svg?react';
import { useFormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function ConsentForm() {
  const theme = useTheme();

  const { register, watch, setValue } = useFormContext();

  const termsData = [
    {
      id: 0,
      name: 'age',
      label: '만 19세 이상입니다.',
      required: true,
      src: null,
    },
    {
      id: 1,
      name: 'private',
      label: '개인정보 수집 및 이용약관',
      required: true,
      src: 'https://www.notion.so/jimin1020/563d711489be45548ad23d7493596b5a',
    },
    {
      id: 2,
      name: 'purchase',
      label: '구매 이용약관',
      required: true,
      src: 'https://www.notion.so/jimin1020/563d711489be45548ad23d7493596b5a',
    },
    {
      id: 3,
      name: 'marketing',
      label: '마케팅 할용동의',
      required: false,
      src: 'https://www.notion.so/jimin1020/563d711489be45548ad23d7493596b5a',
    },
  ];
  const watchedTerms = termsData.map((term) => watch(term.name));

  const allChecked = termsData.every((term) => watchedTerms[term.id]);

  const handleAllChecked = () => {
    termsData.forEach((term) => setValue(term.name, !allChecked));
    setValue('allTerms', !allChecked);
  };

  const handleTermChecked = (target: string, checked: boolean) => {
    setValue(target, !checked);
    if (!checked) {
      setValue('allTerms', false);
    }
  };

  // 필수 요소 동의 여부
  const allRequiredChecked = termsData
    .filter((t) => t.required)
    .every((t) => watchedTerms[t.id]);

  return (
    <Container>
      <AllAgree onClick={handleAllChecked}>
        <div className='checkBox'>
          <Check
            fill={
              allChecked ? theme.color.primary[500] : theme.color.neutral[400]
            }
            width={24}
            height={24}
          />
          <AgreeInput type='checkbox' {...register('allTerms')} />
        </div>
        모두 동의
      </AllAgree>

      <ul>
        {termsData.map((item) => (
          <Term>
            <Option
              onClick={() =>
                handleTermChecked(item.name, watchedTerms[item.id])
              }
            >
              <Check
                fill={
                  watchedTerms[item.id]
                    ? theme.color.primary[500]
                    : theme.color.neutral[400]
                }
                width={24}
                height={24}
              />
              <span> {item.id === 3 ? '(선택)' : '(필수)'}</span>
              <AgreeInput
                id={item.name}
                key={item.label}
                type='checkbox'
                checked={watchedTerms[item.id]}
                {...(register(item.name),
                {
                  required: item.required,
                })}
                onClick={(e) => e.stopPropagation()}
              />
              <Essential htmlFor={item.name}>{item.label}</Essential>

              {item.id ? (
                <View>{item.src && <NavLink to={item.src}>보기</NavLink>}</View>
              ) : (
                ''
              )}
            </Option>
          </Term>
        ))}
      </ul>
    </Container>
  );
}

export default ConsentForm;

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
  }
`;

const AllAgree = styled.div`
  margin-bottom: 20px;
  padding: 18.5px 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  .checkBox {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const AgreeInput = styled.input`
  display: none;
`;

const Term = styled.li`
  padding: 10px;
  cursor: pointer;
`;

const Essential = styled.label`
  margin-left: 3px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]}
  span {
    margin-right: 3px;
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.body.semi_bold[14]}
  }
  cursor: pointer;
  margin-left: 6px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const View = styled.span`
  margin-left: 16px;
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[600]};
`;
