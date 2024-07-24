import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CODE_EXPIRE_TIME } from '../../constants/timer';

function Timer() {
  const [remainingTime, setRemainingTime] = useState<number>(CODE_EXPIRE_TIME);

  useEffect(() => {
    let timeoutId: number;

    const updateRemainingTime = () => {
      setRemainingTime((prev) => prev - 1000);
      timeoutId = window.setTimeout(updateRemainingTime, 1000);
    };
    updateRemainingTime();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <TimerStyle>
      {Math.floor((remainingTime / (1000 * 60)) % 60)}:
      {String(Math.floor((remainingTime / 1000) % 60)).padStart(2, '0')}
    </TimerStyle>
  );
}

export default Timer;

const TimerStyle = styled.span`
  width: fit-content;
  text-align: end;
  color: ${({ theme }) => theme.color.neutral[600]};
  ${({ theme }) => theme.typo.body.medium[14]}

  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
`;
