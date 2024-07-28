import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  expTime: string;
  onFail: () => void;
}

function Timer({ expTime, onFail }: Props) {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    let timeoutId: number;

    const updateRemainingTime = () => {
      const timeDiff = new Date(expTime).getTime() - new Date().getTime();

      if (timeDiff <= 0) {
        setRemainingTime(0);
        onFail();
      } else {
        setRemainingTime(timeDiff);
        timeoutId = window.setTimeout(updateRemainingTime, 1000);
      }
    };

    updateRemainingTime();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [expTime, onFail]);

  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <TimerStyle>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
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
