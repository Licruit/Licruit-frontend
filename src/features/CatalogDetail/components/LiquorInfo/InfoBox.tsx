import styled from 'styled-components';

function InfoBox() {
  return (
    <Container>
      <Info>
        <h5>상세 정보</h5>
        <ul>
          <li>종류 : </li>
          <li>원재료 : </li>
          <li>알콜도수 : </li>
          <li>용량 : </li>
          <li>수상내역 : </li>
          <li>기타 : </li>
        </ul>
      </Info>
      <Info>
        <h5>제품 소개</h5>
        <p>
          꽃, 살구, 레몬, 딸기, 쌀의 순수하고 깨끗한 향을 머금고 있다. 기분 좋은
          산미로 시작하여 달달한 여운이 남는다. 알코올이 튀지않고 안저억인
          밸런스로 맛의 흐름이 명확하고 깔끔함
        </p>
      </Info>
      <Info>
        <h5>어울리는 음식</h5>
        <p>수육, 샐러드, 피자</p>
      </Info>
      <Info>
        <h5>양조장</h5>
        <ul>
          <li>양조장명 : </li>
          <li>주소 : </li>
          <li>홈페이지 : </li>
          <li>문의 : </li>
        </ul>
      </Info>
    </Container>
  );
}

export default InfoBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${({ theme }) => theme.color.neutral[600]};

  h5 {
    ${({ theme }) => theme.typo.heading.bold[18]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  li,
  p {
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;
