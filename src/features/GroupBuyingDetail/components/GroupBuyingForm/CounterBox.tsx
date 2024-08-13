import styled from 'styled-components';
import Counter from './Counter';

function CounterBox() {
  return (
    <Container>
      <div className='description'>
        <span>택배배송 (+3,000원)</span>
        <span>100,000원 이상 결제시 무료 배송</span>
      </div>
      <SelectorWrapper>
        <Counter />
        <span className='price'>19,000원</span>
      </SelectorWrapper>
    </Container>
  );
}

export default CounterBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  .description {
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${({ theme }) => theme.typo.body.medium[12]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    ${({ theme }) => theme.typo.heading.bold[20]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;
