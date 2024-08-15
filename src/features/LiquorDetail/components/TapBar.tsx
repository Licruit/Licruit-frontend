import styled from 'styled-components';

interface Props {
  currentTap: string;
  setCurrentTap: React.Dispatch<React.SetStateAction<string>>;
}

function TapBar({ currentTap, setCurrentTap }: Props) {
  return (
    <Container>
      <div className='tap-wrapper'>
        <Tap
          type='button'
          $isActive={currentTap === '정보'}
          onClick={() => setCurrentTap('정보')}
        >
          정보
        </Tap>
        <Tap
          type='button'
          $isActive={currentTap === '리뷰'}
          onClick={() => setCurrentTap('리뷰')}
        >
          리뷰
        </Tap>
        <Bar $isChanged={currentTap === '리뷰'} />
      </div>
    </Container>
  );
}

export default TapBar;

const Container = styled.div`
  display: flex;
  padding: 20px;
  padding-bottom: 0;
  border-bottom: 0.8px solid ${({ theme }) => theme.color.neutral[400]};

  .tap-wrapper {
    position: relative;
    display: flex;
    padding-bottom: 20px;
  }
`;

const Tap = styled.button<{ $isActive: boolean }>`
  display: flex;
  padding: 0 12px;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.neutral[900] : theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.semi_bold[16]}
  transition: all 0.2s ease-in-out;
`;

const Bar = styled.div<{ $isChanged: boolean }>`
  position: absolute;
  bottom: -1px;
  left: ${({ $isChanged }) => ($isChanged ? '50%' : '0')};

  width: 50%;
  height: 4px;

  background-color: ${({ theme }) => theme.color.primary[500]};

  transition: all 0.2s ease-in-out;
`;
