import { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import Label from '../common/Label';

interface Props {
  label: string;
  isRequired: boolean;
  name: string;
}

function TimePickerComponent({ label, isRequired, name }: Props) {
  const [selectedTime, setSelectedTime] = useState<Date | null>();
  const { control } = useFormContext();

  return (
    <InputWrapper>
      <Label label={label} isRequired={isRequired} />
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <DatePicker
            showTimeSelect
            showTimeSelectOnly
            placeholderText='09:00'
            timeCaption='시작 시간'
            dateFormat='HH:mm'
            onChange={(time) => {
              setSelectedTime(time);
              onChange(time);
            }}
            customInput={<Input />}
            selected={selectedTime}
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

export default TimePickerComponent;
