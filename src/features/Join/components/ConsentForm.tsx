import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { CheckIcon } from 'public/assets/icons';
import { TOS } from '../data/tos';

function ConsentForm() {
  const [terms, setTerms] = useState(TOS);
  const theme = useTheme();
  const { setValue, register, trigger, watch } = useFormContext();

  useEffect(() => {
    setValue('isMarketing', false);
  }, [setValue]);

  const allChecked = terms.every((term) => term.isChecked);

  const handleAllChecked = () => {
    const updatedTerms = terms.map((item) => ({
      ...item,
      isChecked: !allChecked,
    }));
    setTerms(updatedTerms);
    updatedTerms.forEach((item) =>
      setValue(item.name, !allChecked, { shouldValidate: true })
    );
    setValue('isMarketing', !watch('isMarketing'));
    trigger();
  };

  const handleTermChecked = (id: number, required: boolean) => {
    const updatedTerms = terms.map((item) =>
      id === item.id
        ? {
            ...item,
            isChecked: !item.isChecked,
          }
        : item
    );
    setTerms(updatedTerms);

    if (!required) {
      setValue('isMarketing', !terms.find((item) => !item.required)?.isChecked);
    }
  };

  return (
    <Container>
      <AllAgree onClick={handleAllChecked}>
        <div className='check-box'>
          <CheckIcon
            fill={
              allChecked ? theme.color.primary[500] : theme.color.neutral[400]
            }
            width={24}
            height={24}
          />
          <AgreeInput type='checkbox' />
        </div>
        모두 동의
      </AllAgree>

      <ul>
        {terms.map((item) => (
          <Term key={item.id}>
            <Option onChange={() => handleTermChecked(item.id, item.required)}>
              <CheckIcon
                fill={
                  item.isChecked
                    ? theme.color.primary[500]
                    : theme.color.neutral[400]
                }
                width={24}
                height={24}
              />
              <span> {item.required ? '(필수)' : '(선택)'}</span>
              <AgreeInput
                id={item.name}
                key={item.label}
                type='checkbox'
                {...register(item.name, { required: item.required })}
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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const AllAgree = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  margin-bottom: 20px;
  padding: 18.5px 24px;

  color: ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]}
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  .check-box {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

const AgreeInput = styled.input`
  display: none;
`;

const Term = styled.li`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;

  input {
    margin-right: 8px;
  }
`;

const Essential = styled.label`
  cursor: pointer;
  margin-left: 6px;
  color: ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]}
  span {
    margin-right: 3px;
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.body.semi_bold[14]}
  }
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
