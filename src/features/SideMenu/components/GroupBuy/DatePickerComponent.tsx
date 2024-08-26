import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale/ko';
import { useState } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import Label from '../common/Label';

interface Props {
  label: string;
  name: string;
  isRequired: boolean;
  minDate: Date | null;
}

function DatePickerComponent({ label, isRequired, name, minDate }: Props) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const { control } = useFormContext();

  const handleSetDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? undefined);
    setEndDate(end ?? undefined);
  };

  return (
    <InputWrapper>
      <Label label={label} isRequired={isRequired} />
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <DatePicker
            selectsRange
            locale={ko}
            placeholderText='2024.01.01~2024.12.31'
            startDate={startDate}
            endDate={endDate}
            minDate={minDate === null ? undefined : minDate}
            customInput={<Input />}
            dateFormat='yyyy.MM.dd'
            onChange={(date) => {
              handleSetDate(date);
              onChange(date);
            }}
          />
        )}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 17px 18px;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  ${({ theme }) => theme.typo.body.medium[14]};
  &::placeholder {
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

export default DatePickerComponent;
