import styled from 'styled-components';
import { useLiquorDetail } from '../../hooks/useLiquorDetail';
import InfoItem from './InfoItem';

function InfoBox() {
  const { liquorDetail } = useLiquorDetail();

  if (!liquorDetail) return null;

  const {
    categoryName,
    ingredient,
    alcohol,
    volume,
    award,
    etc,
    description,
    food,
    brewery,
    address,
    homepage,
    contact,
  } = liquorDetail;

  return (
    <Container>
      <Info>
        <h5>상세 정보</h5>
        <ul>
          <InfoItem label='종류' value={categoryName} />
          <InfoItem label='원재료' value={ingredient} />
          <InfoItem label='알콜도수' value={alcohol} />
          <InfoItem label='용량' value={`${volume} ml`} />
          <InfoItem label='수상내역' value={award} />
          <InfoItem label='기타' value={etc} />
        </ul>
      </Info>
      <Info>
        <h5>제품 소개</h5>
        <p>{description}</p>
      </Info>
      <Info>
        <h5>어울리는 음식</h5>
        <p>{food}</p>
      </Info>
      <Info>
        <h5>양조장</h5>
        <ul>
          <InfoItem label='양조장명' value={brewery} />
          <InfoItem label='주소' value={address} />
          <InfoItem
            label='홈페이지'
            value={<a href={homepage}>{homepage}</a>}
          />
          <InfoItem label='문의' value={contact} />
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

  p {
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;
